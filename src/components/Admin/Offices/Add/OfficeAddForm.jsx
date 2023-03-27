import { Box, Button, TextField } from '@mui/material';
import React from 'react'


export const OfficeAddForm = ({handleSubmit}) => {
    return (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "70%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="City"
            label="City"
            name="city"
            autoComplete="city"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Street"
            label="Street"
            type="text"
            id="address"
            autoComplete="address"
          />
          <TextField
            margin="normal"
            fullWidth
            name="Email"
            label="Floor"
            type="text"
            id="floor"
            autoComplete="Floor"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="zip"
            label="Zip"
            type="number"
            id="Zip"
            autoComplete="Zip"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Coordinates"
            label="Coordinates"
            type="text"
            id="Coordinates"
            autoComplete="Coordinates"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
        </Box>
      );
}

// {
//     name: "Bahia Blanca",
//     address: {
//       street: "Dr. Luis María Drago 45",
//       zip: "B8000DCA",
//       floor: "9° piso",
//     },
//     coordinates: "-38.71961235719416, -62.26707802202223",
//   },
