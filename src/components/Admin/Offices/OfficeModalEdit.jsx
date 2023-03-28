import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Link, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styleEditProfile } from "../../../utils/styleMUI";
import { muiBtnOfficeDelete } from "../../../utils/styleMUI.js";
import { axiosPutOffice } from "../../../utils/axios";
import { useDispatch } from "react-redux";
import {  updateOffices } from "../../../state/office";

export default function OfficeModalEdit({ office }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [region, setRegion] = React.useState(office.name);
  const [street, setStreet] = React.useState(office.address?.street);
  const [zip, setZip] = React.useState(office.address?.zip);
  const [floor, setFloor] = React.useState(office.address?.floor);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedOffice = {
      ...office,
      name: region,
      address: {
        street: street,
        zip: zip,
        floor: floor,
      },
    };
    axiosPutOffice(office._id, updatedOffice);
    dispatch(updateOffices(updatedOffice));
  }

  return (
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={handleOpen}
        sx={{ mt: 2, color: "#444444" }}
      >
        <EditIcon />
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form" onSubmit={handleSubmit}>
          <TextField
            id="standard-multiline-static"
            label="Region"
            multiline
            placeholder="New region..."
            variant="standard"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Street"
            multiline
            placeholder="New street..."
            variant="standard"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Zip"
            multiline
            placeholder="New zip..."
            variant="standard"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Floor"
            multiline
            placeholder="New floor..."
            variant="standard"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={muiBtnOfficeDelete}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
