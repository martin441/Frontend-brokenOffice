import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DashboardUser } from "./Dashboard";

export const UserHome = () => {
  const user = useSelector((state) => state.user);
  const theme = useSelector(state => state.theme.mode)

  return (
    <Box className={theme === 'light' ? 'header-container-home home-text' : 'header-container-home-dark home-text'} sx={{color:'text.primary'}} >
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{fontWeight: '600', mb:'1rem'}}>{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <DashboardUser />
        </Box>
      )}
    </Box>
  );
};
