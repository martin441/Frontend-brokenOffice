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
      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "80%", margin: "0 auto" }}
      >
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            alt="Input Image"
            src={singleUser.user.image ? singleUser?.user.picure : imageSrc}
            sx={{ maxWidth: "70%" }}
          ></Box>
        </Grid>

        <Grid item xs={16} md={8}>
          <Divider></Divider>
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="ID:" sx={{ mr: 1 }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleUser?.user._id}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Name:" sx={{ mr: 1 }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >{`${singleUser?.user.name} ${singleUser?.user.lastName}`}</Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Email:" sx={{ mr: 1 }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleUser?.user.email}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Address:" sx={{ mr: 1 }} />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleUser?.user.addressName}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Role:" sx={{ mr: 1 }} />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleUser?.user.role}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Type:" sx={{ mr: 1 }} />
              <Typography align="right" variant="subtitle1">
                {singleUser?.user.type &&
                  checkSingleUserType(singleUser.user.type)}
              </Typography>
            </ListItem>
            <Divider></Divider>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
