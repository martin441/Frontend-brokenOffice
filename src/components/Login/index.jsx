import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, InputAdornment, Modal } from "@mui/material";
import { muiStyleLoginBtn, styleEditProfile } from "../../utils/styleMUI";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../state/user";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosPostGenerateRestoreLink } from "../../utils/axios";

export default function SignInSide() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [emailToRestore, setEmailToRestore] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const userData = {
        email: data.get("email"),
        password: data.get("password"),
      };
      const loggedUser = await axios.post(`${ROUTE}/user/login`, userData, {
        withCredentials: true,
      });
      dispatch(setUser(loggedUser.data));
      navigate("/");
    } catch (err) {
      toast.error("Wrong email or password");
      console.error(err);
    }
  };

  const handleRestorePass = async () => {
    const mailValidation = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/);
    if (!mailValidation.test(emailToRestore)) return toast.error("Write a valid email");
    try {
      const link = await axiosPostGenerateRestoreLink(emailToRestore)
      if (link.error) return
      toast.success("Check your email to restore")
      setOpen(false)
      setEmailToRestore("");
    } catch (error) {
      toast.error("Invalid credentials")
    }
  }

  return (
    <>
    <Modal open={open}
        onClose={() => {
          setOpen(false);
          setEmailToRestore("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={styleEditProfile} component="form">
          <TextField label="email to restore password" onChange={(e) => setEmailToRestore(e.target.value)} />
          <Button
              onClick={handleRestorePass}
              variant="contained"
              sx={{ mt: 2, mx: "auto" }}
            >
              Send
            </Button>
          </Box>
      </Modal>
    <Container component="main" maxWidth="lg">
      
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://statics.globant.com/production/public/2023-02/Ref-Globant-Canada-2.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
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
                Log in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: <InputAdornment position="end" onClick={() => setShowPassword(i => !i)}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon />}</InputAdornment>,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log in
                </Button>
                <Grid sx={muiStyleLoginBtn}>
                  <Grid item xs>
                    <Link variant="body1" style={{color: 'black', textDecoration:'none'}} onClick={() => setOpen(true)}>
                      Forgot your password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
