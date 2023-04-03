import { Box } from "@mui/system";
import { AddBtn } from "../../../commons/AddBtn";
import DataTable from "./DataTable";

export const SuperAdminView = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", padding: 2 }}>
        <AddBtn href="/superadmin/users/register" />
      </Box>
      <DataTable />
    </div>
  );
};
