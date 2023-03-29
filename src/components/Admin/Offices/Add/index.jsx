import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { OfficeAddForm } from "./OfficeAddForm";
import BusinessIcon from "@mui/icons-material/Business";
import { BackLink } from "../../../../commons/BackLink";

export const OfficeAdd = () => {
  return (
    <Container component="main" maxWidth="lg">
      <BackLink text="Back to Offices" href="/admin/offices" />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          New Office <BusinessIcon fontSize="small" />
        </Typography>
        <OfficeAddForm />
      </Box>
    </Container>
  );
};
