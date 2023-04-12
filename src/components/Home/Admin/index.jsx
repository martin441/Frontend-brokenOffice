import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DashboardAdmin } from "./Dashboard";
import { DashboardUser } from "../User/Dashboard";

export const AdminHome = () => {
  const user = useSelector((state) => state.user);
  const theme = useSelector(state => state.theme.mode)

  return (
    <Box className={theme === 'light' ? 'header-container-home home-text' : 'header-container-home-dark home-text'} sx={{color:'text.primary'}} >
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{fontWeight: '600', mb:'1rem'}}>{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <DashboardAdmin />
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
