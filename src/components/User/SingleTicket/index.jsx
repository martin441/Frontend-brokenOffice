import {
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleTicket = () => {
  const { id } = useParams();
  const idSlice = id.slice(0, -1)


  const imageSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";

  const [singleReport, setSingleReport] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ROUTE}/reports/single/${id}`, {
        withCredentials: true,
      })
      .then((res) => { 
        setSingleReport(res.data);
      })
      .catch((err) => console.error(err));
  }, [idSlice]);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Report
      </Typography>

      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "70%", margin: "0 auto" }}
      >
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            alt="Input Image"
            src={imageSrc}
            sx={{ maxWidth: "100%" }}
          ></Box>
        </Grid>

        <Grid item xs={16} md={8}>
          <Divider></Divider>
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="ID:" />
              <Typography variant="subtitle1">{singleReport?._id}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Title:" />
              <Typography variant="subtitle1">{singleReport?.title}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Description:" />
              <Typography
                variant="subtitle1"
                maxWidth={"50%"}
                sx={{ wordWrap: "break-word", textAlign: "right" }}
              >
                {singleReport.description}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Image:" />
              <Typography variant="subtitle1">Image</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Office:" />
              <Typography align="right" variant="subtitle1">
                {singleReport.office && `${singleReport?.office.address.street}, ${singleReport?.office.address.zip}, ${singleReport?.office.address.floor}, ${singleReport.office.name}`}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Status:" />
              <Typography align="right" variant="subtitle1">
                {singleReport.status}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Product:" />
              <Stack direction="row" spacing={1}>
                <Chip label="Deletable" onDelete={handleDelete} />
              </Stack>
            </ListItem>
            <Divider></Divider>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
