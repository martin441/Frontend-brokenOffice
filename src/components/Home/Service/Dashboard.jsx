import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import { muiDashboardHome } from "../../../utils/styleMUI";
  import HistoryIcon from '@mui/icons-material/History';
import { ReportListHomeService } from "./ReportsListHome";
import { useNavigate } from "react-router";
  
  export const DashboardService = () => {
    const navigate = useNavigate();
    return (
      <Box sx={muiDashboardHome}>
        <Card sx={{ maxWidth: 345, mt: '1rem' }}>
          <CardActionArea>
            <CardContent  onClick={() => navigate("/service/report/all")}>
              <HistoryIcon />
              <Typography gutterBottom variant="h5" component="div">
                Pending Reports
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
  