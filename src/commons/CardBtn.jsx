import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const CardBtn = ({ text, rute, handleClick, setHandleClick }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Button
        color="secondary"
        sx={{
          mb: 1,
          borderRadius: 20,
          color: "black",
          border: "1px solid black",
          width: 104,
        }}
        onClick={() => setHandleClick(!handleClick)}
      >
        <Typography
          sx={{ margin: 0 }}
          variant="caption"
          display="block"
          gutterBottom
        >
          {handleClick ? "Less Details" : "More Details"}
        </Typography>
      </Button>
      <Button
        color="secondary"
        sx={{
          mb: 1,
          borderRadius: 20,
          color: "black",
          border: "1px solid black",
          width: 100,
        }}
        onClick={() => navigate(rute)}
      >
        <Typography
          sx={{ margin: 0 }}
          variant="caption"
          display="block"
          gutterBottom
        >
          {`View ${text}`}
        </Typography>
      </Button>
    </Box>
  );
};

export default CardBtn;
