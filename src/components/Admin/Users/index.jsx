import { Box } from "@mui/system";
import { AddBtn } from "../../../commons/AddBtn";
import DataTable from "./DataTable";

export const AdminView = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: 'space-evenly', padding: 2 }}>
        <AddBtn href="/admin/users/register" />
      </Box>
      <DataTable />
    </div>
  );
};
