import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Chat from "../../Chat";

export const ReportData = ({ singleReport }) => {
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
              <ListItemText primary="Title:" />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleReport?.title}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Description:" />
              <Typography
                variant="subtitle1"
                maxWidth={"50%"}
                sx={{
                  wordWrap: "break-word",
                  textAlign: "right",
                  maxWidth: "80%",
                }}
              >
                {singleReport?.description}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Office:" />
              <Typography
                align="right"
                variant="subtitle1"
                sx={{ maxWidth: "80%" }}
              >
                {singleReport.office &&
                  `${singleReport?.office.address.street}, ${singleReport?.office.address.zip}, ${singleReport?.office.address.floor}, ${singleReport.office.name}`}
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

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Product:" />
              <Typography align="right" variant="subtitle1">
                {singleReport?.product}
              </Typography>
            </ListItem>
            <Divider></Divider>
          </List>
          <Chat report={singleReport?._id}/>
        </Grid>
      </Grid>
    </div>
  );
};
