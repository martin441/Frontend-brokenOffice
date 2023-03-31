import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ReviewNewTicket() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Title:" />
          <Typography variant="subtitle1">Title</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Description:" />
          <Typography variant="subtitle1">Description</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Image:" />
          <Typography variant="subtitle1">Image</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Location:" />
          <Typography variant="subtitle1">Address</Typography>
        </ListItem>
        
      <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Service Desk:" />
          <Typography variant="subtitle1">Service Desk</Typography>
        </ListItem>
      </List>

  
    </React.Fragment>
  );
}
