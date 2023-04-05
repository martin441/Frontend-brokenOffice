import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DashboardSuperAdmin } from "./Dashboard";
import { DashboardUser } from "../User/Dashboard";

export const SuperAdminHome = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box className="header-container-home home-text">
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <DashboardSuperAdmin />
          <DashboardUser />
        </Box>
      )}
    </Box>
  );
};
