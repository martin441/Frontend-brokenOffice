import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import AccountMenu from "./Menu";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 0 }} color="secondary">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
