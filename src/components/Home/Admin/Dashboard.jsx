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
import { Link } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const DashboardAdmin = () => {
  return (
    <Box sx={muiDashboardHome}>
      <Link to="/admin/offices">
        <Card sx={{ minWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <BusinessIcon />
              <Typography gutterBottom variant="h5" component="div">
                Offices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View, edit, create and delete offices
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Link>
      <Link to="/admin/users">
        <Card sx={{ minWidth: 345, mt: '1rem' }}>
          <CardActionArea>
            <CardContent>
              <PeopleAltIcon />
              <Typography gutterBottom variant="h5" component="div">
                Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View, create and delete users
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Link>
    </Box>
  );
};
