import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { muiDashboardHome } from "../../../utils/styleMUI";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useNavigate } from "react-router";

export const DashboardAdmin = () => {
  const navigate = useNavigate();
  return (
    <Box sx={muiDashboardHome}>
      <Card sx={{ minWidth: 345 }} onClick={() => navigate("/admin/offices")}>
        <CardActionArea>
          <CardContent>
            <BusinessIcon />
            <Typography gutterBottom variant="h5" component="div">
              Globant Offices
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to view, edit, create and delete offices
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
      <Card
        sx={{ minWidth: 345, mt: "1rem" }}
        onClick={() => navigate("/admin/users")}
      >
        <CardActionArea>
          <CardContent>
            <PeopleAltIcon />
            <Typography gutterBottom variant="h5" component="div">
              Globant Users
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to view, create and delete users
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};
