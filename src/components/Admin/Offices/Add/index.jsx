import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { OfficeAddForm } from "./OfficeAddForm";
import BusinessIcon from "@mui/icons-material/Business";
import { BackLink } from "../../../../commons/BackLink";

export const OfficeAdd = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <BackLink text='Back to Offices' />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        TextField
      >
        <Typography component="h1" variant="h5">
          New Office <BusinessIcon fontSize="small" />
        </Typography>
        <OfficeAddForm handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};
