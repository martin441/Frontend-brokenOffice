import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { axiosPostOffice } from "../../../../utils/axios";
import { muiBtnOfficeDelete } from "../../../../utils/styleMUI.js";
import { useDispatch } from "react-redux";
import { addOffice } from "../../../../state/office";
import axios from "axios";

export const OfficeAddForm = () => {
  const [region, setRegion] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [floor, setFloor] = React.useState("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const coords = await axios.post(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${street}&key=${process.env.REACT_APP_API_KEY}`
      );
      const { lat, lng } = coords.data.results[0].geometry.location;
      const newOffice = {
        name: region,
        address: {
          street: street,
          zip: Number(zip),
          floor: floor,
        },
        location: { type: "Point", coordinates: [lat, lng] },
      };
      axiosPostOffice(newOffice);
      dispatch(addOffice(newOffice));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, width: "70%" }}
      >
        {/* <PlacesAutocomplete /> */}
        <TextField
          id="standard-multiline-static"
          label="Region"
          multiline
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
