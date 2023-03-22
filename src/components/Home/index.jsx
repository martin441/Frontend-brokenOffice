import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import React from "react";

export const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // localStorage.setItem(
  //   "user",
  //   JSON.stringify({
  //     id: 1,
  //     name: "John ",
  //     lastname: "Doe",
  //     email: "johndoe@example.com",
  //     companyRole: "developer",
  //     address: "address 123",
  //   })
  // );

  return (
    <Box className="header-container-home home-text">
      {user?.id ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3">{`Hey ${user.name} ${user.lastname}!`}</Typography>
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
