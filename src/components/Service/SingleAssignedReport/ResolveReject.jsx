import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { muiModal, styleEditProfile } from "../../../utils/styleMUI";

export default function ResolveRejectBtn({singleReport}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box>
      <Box sx={{display:'flex', alignItems: 'end', justifyContent: 'end', flexWrap:'wrap', gap: '2rem'}}>
      <Button variant="contained" onClick={handleOpen}>
        Resolve
      </Button>
      <Button variant="contained" color="error" onClick={handleOpen}>
        Reject
      </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form">
          <TextField
            id="standard-multiline-static"
            label="Recipient"
            multiline
            placeholder="Recipient"
            variant="standard"
            value={'emaiIssuer'}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Title"
            multiline
            placeholder="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            placeholder="Description"
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2, mx: "auto" }}
          >
            Confirm
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
