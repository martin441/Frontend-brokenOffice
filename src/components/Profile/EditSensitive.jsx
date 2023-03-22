import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styleEditProfile } from "../../utils/styleMUI";
import {  Button, Link, TextField } from "@mui/material";

export default function EditSensitive() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={handleOpen}
        sx={{ mt:2}}
        color='error'
      >
        Change Password
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form" >
          <TextField
            id="standard-multiline-static"
            label="Password"
            multiline
            placeholder="New password..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
             <TextField
            id="standard-multiline-static"
            label="Repeat Password"
            multiline
            placeholder="Repeat Password..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
          <Button variant="contained" sx={{ mt:2, mx:'auto'}}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
