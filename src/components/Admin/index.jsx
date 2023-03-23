import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Navigate, useNavigate } from "react-router";
import DataTable from "./DataTable";

export const AdminView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{display:'flex', padding: 2}}>
        <Button
          variant="contained"
          sx={{ mt: "1rem", borderRadius: 20 }}
          onClick={() => navigate("/admin/users/register")}
        >
          CREATE USER
        </Button>
      </Box>
      <DataTable />
    </div>
  );
};
