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
import Chat from "../../Chat";
import ResolveRejectBtn from "./ResolveReject";

export const ReportDataService = ({ singleReport }) => {
  const imageSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
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
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            alt="Input Image"
            src={singleReport.image ? singleReport?.image : imageSrc}
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
              <ListItemText primary="Issuer:" />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{ maxWidth: "80%" }}
              >
                {singleReport.issuer
                  ? `${singleReport?.issuer.name} ${singleReport?.issuer.lastName}`
                  : ""}
              </Typography>
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
                {singleReport?.description}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Date of issue:" />
              <Typography
                variant="subtitle1"
                maxWidth={"50%"}
                sx={{ wordWrap: "break-word", textAlign: "right" }}
              >
                {singleReport?.date?.substring(0, 10)}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Office:" />
              <Typography align="right" variant="subtitle1">
                {singleReport.office &&
                  `${singleReport?.office.address.street}, ${singleReport?.office.address.zip}, ${singleReport?.office.address.floor} ${singleReport.office.name}`}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Product:" />
              <Typography align="right" variant="subtitle1">
                {singleReport?.product}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Status:" />
              <Typography align="right" variant="subtitle1">
                {singleReport?.status}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 2, px: 0 }}>
              <ListItemText primary="Resolve:" />
              {singleReport && <ResolveRejectBtn singleReport={singleReport} />}
            </ListItem>
            <Divider></Divider>
          </List>
          {singleReport._id && <Chat report={singleReport?._id} chatType={"assigned"}/>}
        </Grid>
      </Grid>
    </div>
  );
};
