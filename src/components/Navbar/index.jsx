import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import MenuNav from "./MenuNav";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { setTheme } from "../../state/theme";

export const Navbar = () => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme))
    }
  }, [dispatch, theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme))
    localStorage.setItem('theme', newTheme);
  };

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
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button onClick={toggleTheme}>
                {" "}
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </Button>

              <MenuNav />
            </Box>
          ) : (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button onClick={toggleTheme}>
                {" "}
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </Button>
              <button onClick={() => navigate("/login")} className="btn-login">
                LOGIN
              </button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
