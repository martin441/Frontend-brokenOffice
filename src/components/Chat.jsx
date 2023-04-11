import React, { useState, useEffect, useRef } from "react";
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
import {
  muiChatRecipientMsg,
  muiChatSenderMsg,
  muiModalChat,
  muiModalChatForm,
} from "../utils/styleMUI";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import checkType from "../utils/checkType";
const socket = io("http://localhost:3001");

function useChatScroll(dep) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

export default function Chat({ report, chatType }) {
  const user = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useChatScroll(messages);

  useEffect(() => {
    socket.on("message_received", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
    return () => {
      socket.off("message_received");
    };
  }, [socket]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // handleLeave();
    setOpen(false);
  };

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

  //   const handleLeave = () => {
  //     alert("you have been disconnected");
  //     socket.disconnect();
  //     setConnection(false)
  //     setMessages([]);
  //   };

  return (
    <div>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          onClick={handleChatConnection}
          variant="contained"
          startIcon={<ChatIcon />}
        >
          {checkType(user.type) === 14 && chatType === "assigned"
            ? "Assist issuer"
            : " Ask for help"}
        </Button>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={muiModalChat}>
          <List sx={{ flexGrow: 1, overflow: "auto" }}>
            {messages?.length > 0 && (
              <>
                {messages?.map((message, index) => {
                  if (message.user.email === user.email) {
                    return (
                      <ListItem key={index}>
                        <Stack
                          spacing={1}
                          justifyContent="flex-end"
                          alignItems="flex-end"
                          sx={{ width: "100%", textAlign: "right" }}
                        >
                          <Box sx={muiChatSenderMsg} ref={ref}>
                            <Typography variant="button">
                              {message.user?.name}
                            </Typography>
                            <Typography variant="body2">
                              {message.content}
                            </Typography>
                            <Typography variant="caption" color="grey">
                              {new Date(message.date).toLocaleString("en-GB", {
                                day: "numeric",
                                month: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              })}
                            </Typography>
                          </Box>
                        </Stack>
                      </ListItem>
                    );
                  } else {
                    return (
                      <ListItem key={index}>
                        <Stack
                          spacing={1}
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          sx={{ width: "100%" }}
                        >
                          <Box sx={muiChatRecipientMsg}>
                            <Typography variant="button">
                              {message.user?.name}
                            </Typography>
                            <Typography variant="body2">
                              {message.content}
                            </Typography>
                            <Typography variant="caption" color="grey">
                              {new Date(message.date).toLocaleString("en-GB", {
                                day: "numeric",
                                month: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              })}
                            </Typography>
                          </Box>
                        </Stack>
                      </ListItem>
                    );
                  }
                })}
              </>
            )}
          </List>

          <Box component="form" onSubmit={handleSubmit} sx={muiModalChatForm}>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Type your message"
                value={inputValue}
                onChange={handleInputChange}
                sx={{ flexGrow: 1 }}
              />
              <Button
                type="submit"
                variant="text"
                color="secondary"
                startIcon={
                  <SendIcon style={{ fontSize: 40 }} color="primary" />
                }
              ></Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
