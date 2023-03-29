import {
  Avatar,
  Backdrop,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import EditSensitive from "./EditSensitive";
import { Box } from "@mui/system";
import { styleEditProfile } from "../../utils/styleMUI";
import axios from "axios";

export const Profile = () => {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [imgAvatar, setImgAvatar] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeInput = async (e) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImgAvatar(onLoadEvent.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    try {
      const { data } = await axios.put(`${ROUTE}/user/edit/profile`,  imgAvatar , { withCredentials: true });
    } catch (err) {
      console.error("desde PROFILE,index", err);
    }

    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form">
          <Input type="file" onChange={handleChangeInput} />
        </Box>
      </Modal>
      <div className="header-container">
        <div className="header-profile">
          <img
            className="header-image"
            src="https://statics.globant.com/production/public/2022-12/Mask%20Group%2061.jpeg"
            alt="header profile"
          />
        </div>
      </div>

      <div className="header-avatar">
        {hover ? (
          <Avatar
            sx={{
              backgroundColor: "gray",
              width: "10rem",
              height: "10rem",
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
            onMouseOut={() => setHover(false)}
            onClick={handleOpen}
          >
            <EditIcon onMouseEnter={() => setHover(true)} />
          </Avatar>
        ) : (
          <Avatar
            src={imgAvatar}
            onMouseEnter={() => setHover(true)}
            sx={{ width: "10rem", height: "10rem" }}
          ></Avatar>
        )}
      </div>

      <div className="profile-data">
        <Typography variant="h6"> {user?.name} </Typography>
        <Typography variant="h6"> {user?.lastName} </Typography>
        <Typography variant="subtitle2" sx={{ color: "#666666" }}>
          {user?.role}
        </Typography>
        <Typography>{user?.email}</Typography>
        <Typography variant="p">{user?.address}</Typography>
      </div>

      <EditProfile />
      <EditSensitive />
    </>
  );
};
