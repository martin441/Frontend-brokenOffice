import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";
import { styleEditProfile } from "../../utils/styleMUI";
import { Button, Link, TextField } from "@mui/material";
import axios from "axios";

export default function EditSensitive() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");

  const handleSubmit = () => {
    if (newPassword !== repeatPassword)
      return toast.error("The new password does not match");
    axios
      .put(
        `${ROUTE}/user/edit/password`,
        { oldPassword, newPassword },
        { withCredentials: true }
      )
      .then(() => {
        toast.success("Password changed successfully")
        handleClose();
      })
      .catch((err) => toast.error("Password is incorrect"));
  };

  return (
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={handleOpen}
        sx={{ mt: 2 }}
        color="error"
      >
        Change Password
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form">
          <TextField
            id="standard-multiline-static"
            label="Old Password"
            multiline
            variant="standard"
            onChange={(e) => setOldPassword(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="New Password"
            multiline
            variant="standard"
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Repeat Password"
            multiline
            variant="standard"
            onChange={(e) => setRepeatPassword(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2, mx: "auto" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
