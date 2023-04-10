import React, { useState, useEffect } from "react";
import { Box, Stack, Button, Typography, Modal } from "@mui/material";
import { muiModal } from "../utils/styleMUI";
import ChatIcon from "@mui/icons-material/Chat";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export default function Chat({ report }) {
  const socket = io("http://localhost:3001");
  const user = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [connected, setConnected] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    socket.on("message_received", (msg) => {
      setMessages([...messages, msg]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("message_received");
      socket.off("disconnect");
    };
  }, [messages]);

  const handleChatConnection = async () => {
    try {
      const newChat = await axios.post(
        "http://localhost:3001/chats/create",
        { room: report },
        { withCredentials: true }
      );

      const chatHistory = await axios.get(
        `http://localhost:3001/chats/history/${newChat.data._id}`,
        { withCredentials: true }
      );

      setMessages(chatHistory.data);
      socket.emit("join_room", report);

      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (inputValue.trim() === "") {
        return;
      }

      if (!connected) {
        setInputValue("");
        return alert("You are disconnected");
      }

      const newMessage = await axios.post(
        "http://localhost:3001/chats/messages",
        { msg: inputValue, room: report },
        { withCredentials: true }
      );

      socket.emit("message_sent", inputValue, user.name, report);
      setInputValue("");
      setMessages([...messages, newMessage.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeave = async () => {
    alert("you have been disconnected");
    socket.disconnect();
    setConnected(false);
    setMessages([]);
  };

  return (
    <div>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          onClick={handleChatConnection}
          variant="contained"
          startIcon={<ChatIcon />}
        >
          Ask for help
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={muiModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
