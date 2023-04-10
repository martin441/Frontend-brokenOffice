import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DashboardService } from "./Dashboard";
import { DashboardUser } from "../User/Dashboard";

export const ServiceHome = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box className="header-container-home home-text" >
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{fontWeight: '600'}}>{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <DashboardService />
            </Grid>
            <Grid item xs={12} md={5}>
              <DashboardUser />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
