import { Avatar, Typography } from "@mui/material";
import React from "react";
import EditProfile from "./EditProfile";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
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
        <Avatar sx={{ width: "6rem", height: "6rem" }}></Avatar>
      </div>

    

      <div className="profile-data">
        <Typography variant="h6"> {user?.name} </Typography>
        <Typography variant="h6"> {user?.lastname} </Typography>
        <Typography variant="subtitle2" sx={{ color: "#666666" }}>
          {user?.companyRole}
        </Typography>
        <Typography>{user?.email}</Typography>
        <Typography variant="p">{user?.address}</Typography>
      </div>

      <EditProfile />
    </>
  );
};
