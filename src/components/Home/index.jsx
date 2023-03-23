import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    axios
      .get(`${ROUTE}/user/profile/`, {
        withCredentials: true,
      })
      .then((data) => localStorage.setItem("user", JSON.stringify(data.data)));
  }, [ROUTE]);

  return (
    <Box className="header-container-home home-text">
      {user?._id ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3">{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 20, mt: 3 }}
            onClick={() => navigate("/user/profile")}
          >
            Profile
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3">Hey Glober!</Typography>
          <Typography variant="h6">
            Looks like you are not signed in...
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 20, mt: 3 }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
};
