import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  Modal,
  TextField,
  ListItem,
  List,
} from "@mui/material";
import { muiModalChat } from "../utils/styleMUI";
import ChatIcon from "@mui/icons-material/Chat";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export default function Chat({ report }) {
  const socket = io("http://localhost:3001");
  const user = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // handleLeave();
    setOpen(false);
  };

  useEffect(() => {
     socket.on("message_received", (msg) => {
      console.log(msg, "MSGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
      setMessages(messages => [...messages, msg]);
      console.log([...messages, msg]);
    });

    return () => {
      socket.off("message_received");
    };

  }, [messages, socket]);

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

  const handleLeave = () => {
    alert("you have been disconnected");
    socket.disconnect();
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
        <Box sx={muiModalChat}>
          <Stack
            sx={{ width: "100%", margin: "auto", marginTop: "2rem" }}
            spacing={2}
          >
            {messages?.length > 0 && (
              <List>
                {messages?.map((message, index) => (
                  <ListItem key={index}>
                    <Stack spacing={1}>
                      <Typography variant="caption">{message.date}</Typography>
                      <Typography variant="button">
                        {message.user?.name}
                      </Typography>
                      <Typography variant="body2">{message.content}</Typography>
                    </Stack>
                  </ListItem>
                ))}
              </List>
            )}
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Type your message"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
