import { Box, Button, TextField } from "@mui/material";

export const Form = ({ handleSubmit }) => {
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
        id="Name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Last Name"
        label="Last Name"
        type="Last Name"
        id="Last Name"
        autoComplete="Last Name"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Email"
        label="Email"
        type="Email"
        id="Email"
        autoComplete="Email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Password"
        label="Password"
        type="Password"
        id="Password"
        autoComplete="Password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Role"
        label="Role"
        type="Role"
        id="Role"
        autoComplete="Role"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="Type"
        label="Type"
        type="Type"
        id="Type"
        autoComplete="Type"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
    </Box>
  );
};
