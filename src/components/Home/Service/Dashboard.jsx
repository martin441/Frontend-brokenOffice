import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { muiDashboardHome } from "../../../utils/styleMUI";
import HistoryIcon from "@mui/icons-material/History";
import { ReportListHomeService } from "./ReportsListHome";
import { useNavigate } from "react-router";

export const DashboardService = () => {
  const navigate = useNavigate();
  return (
    <Box sx={muiDashboardHome}>
      <Card sx={{ width: 345}}>
        <CardActionArea>
          <CardContent>
            <HistoryIcon />
            <Typography gutterBottom variant="h5" component="div">
              Pending Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to access the reports assigned to you
            </Typography>
          </CardContent>
          <CardContent>
            <ReportListHomeService />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
