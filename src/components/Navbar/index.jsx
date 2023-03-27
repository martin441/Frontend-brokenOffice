import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import MenuNav from "./MenuNav";

export const Navbar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

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
          {user?.email ? (
            <MenuNav />
          ) : (
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
