import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import MenuNavService from "../Service/MenuNav";
import { Logo } from "./Logo";
import AccountMenu from "./Menu";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

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
          {user?.type === "standard" && <AccountMenu />}
          {user?.type === "service" && <MenuNavService />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
