import { Avatar, Typography } from "@mui/material";
import React from "react";

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
        <Avatar
          className="header-avatar"
          sx={{ width: "6rem", height: "6rem" }}
        ></Avatar>
        
        <div className="profile-data">
          <h4> {user.name} </h4>
          <h4> {user.lastname} </h4>
          <p>{user.email}</p>
        </div>
      </div>
    </>
  );
};
