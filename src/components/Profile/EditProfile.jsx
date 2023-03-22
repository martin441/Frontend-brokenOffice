import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styleEditProfile } from "../../utils/styleMUI";
import { Button, TextField } from "@mui/material";

export default function EditProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" sx={{mt:'1rem', borderRadius:20}} onClick={handleOpen}>EDIT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form">
          <TextField
            id="standard-multiline-static"
            label="Name"
            multiline
            placeholder="New name..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Last Name"
            multiline
            placeholder="New lastname..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Email"
            multiline
            placeholder="New email..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Role"
            multiline
            placeholder="New role..."
            variant="standard"
            onChange=""
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Address"
            multiline
            placeholder="New address..."
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
