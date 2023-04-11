import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { muiDashboardHome } from "../../../utils/styleMUI";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { ReportListHomeUser } from "./ReportListHome";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router";

export const DashboardUser = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Box sx={muiDashboardHome}>
      <Card sx={{ minWidth: 345 }} onClick={() => navigate("/user/new-ticket")}>
        <CardActionArea>
          <CardContent>
            <BuildCircleIcon />
            <Typography gutterBottom variant="h5" component="div">
              New Report
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to report an incident with your office supplies
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>

      <Card
        onMouseMove={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        sx={{
          minWidth: 345,
          // maxWidth: 345,
          mt: "1rem",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            opacity: 0.7,
            transition: ".4s",
          },
        }}
      >
        <CardActionArea>
          <CardContent>
            {/* onClick={() => navigate("/user/history")} */}

            <HistoryIcon />
            <Typography
              sx={{ p: 0, m: 0 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to get access to your report history
            </Typography>
          </CardContent>
          <CardContent>
            <ReportListHomeUser expand={hover} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
