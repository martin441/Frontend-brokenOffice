import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import checkType from "../../../../utils/checkType";
// import BackLink from "../../../../commons/BackLink";

export const UserData = ({ singleUser }) => {
  function checkSingleUserType(type) {
    switch (checkType(type)) {
      case 66:
        return "Admin";

      case 14:
        return "Service";

      case 21:
        return "Standard";

      case 32:
        return "SuperAdmin";

      default:
        break;
    }
  }

  const imageSrc =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <div>
      {" "}
      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "70%", margin: "0 auto" }}
      >
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            alt="Input Image"
            src={singleUser.image ? singleUser?.picure : imageSrc}
            sx={{ maxWidth: "70%" }}
          ></Box>
        </Grid>

        <Grid item xs={16} md={8}>
          <Divider></Divider>
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="ID:" />
              <Typography variant="subtitle1">{singleUser?._id}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Name:" />
              <Typography
                variant="subtitle1"
                sx={{ maxWidth: "80%" }}
              >{`${singleUser?.name} ${singleUser?.lastName}`}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Email:" />
              <Typography variant="subtitle1">{singleUser?.email}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Address:" />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{ maxWidth: "80%" }}
              >
                {singleUser?.addressName}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Role:" />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{ maxWidth: "80%" }}
              >
                {singleUser?.role}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Type:" />
              <Typography align="right" variant="subtitle1">
                {singleUser?.type && checkSingleUserType(singleUser.type)}
              </Typography>
            </ListItem>
            <Divider></Divider>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
