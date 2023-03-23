import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {  Link, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { styleEditProfile } from "../../../utils/styleMUI";


export default function OfficeModalEdit({office}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={handleOpen}
        sx={{ mt:2, color: "#444444"}}
      >
         <EditIcon />
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile}  >
          <TextField
            id="standard-multiline-static"
            label="Region"
            multiline
            placeholder="New region..."
            variant="standard"
            value={office.name}
            onChange={(e) => e.target.value}
            sx={{ mb: ".5rem" }}
          />
        <TextField
            id="standard-multiline-static"
            label="Street"
            multiline
            placeholder="New street..."
            variant="standard"
            value={office.address?.street}
            onChange={(e) => e.target.value}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Zip"
            multiline
            placeholder="New zip..."
            variant="standard"
            value={office.address?.zip}
            onChange={(e) => e.target.value}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Floor"
            multiline
            placeholder="New floor..."
            variant="standard"
            value={office.address?.floor}
            onChange={(e) => e.target.value}
            sx={{ mb: ".5rem" }}
          />
        </Box>
      </Modal>
    </div>
  );
}