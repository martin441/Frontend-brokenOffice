import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import MenuNavAdmin from "../Admin/MenuNav";
import MenuNavService from "../Service/MenuNav";
import MenuNavUser from "../User/MenuNav";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()

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
          {user?.type === "standard" && <MenuNavUser />}
          {user?.type === "service" && <MenuNavService />}
          {user?.type === "admin" && <MenuNavAdmin />}
          {!user && (
            <React.Fragment>
              <button onClick={() => navigate("/login")} className="btn-login">
                LOGIN
              </button>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
