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
  import HistoryIcon from '@mui/icons-material/History';
import { ReportListHomeService } from "./ReportsListHome";
  
  export const DashboardService = () => {
    return (
      <Box sx={muiDashboardHome}>
        <Card sx={{ maxWidth: 345, mt: '1rem' }}>
          <CardActionArea>
            <CardContent>
              <HistoryIcon />
              <Typography gutterBottom variant="h5" component="div">
                Pending Tickets
              </Typography>
              <ReportListHomeService />
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Box>
    );
  };
  