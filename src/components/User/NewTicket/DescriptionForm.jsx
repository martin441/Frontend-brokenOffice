import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function DescriptionForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Incident Description
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="newTicketTitle"
            label="Title"
            name="title"
            type="text"
            autoFocus
            helperText="Provide a brief and descriptive title"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="newTicketDescription"
            label="Description"
            type="text"
            id="newTicketDescription"
            helperText="Provide an explanation of what happened"
          />
        </Grid>
        <Grid item xs={12}>
          <Button>
            <TextField
              variant="outlined"
              type="file"
              onChange={""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                accept: ".jpg",
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
