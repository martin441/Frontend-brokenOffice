import { Box } from "@mui/system";
import { AddBtn } from "../../../commons/AddBtn";
import Table from "./Table/index"

export const AdminView = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: 'space-evenly', padding: 2 }}>
        <AddBtn href="/admin/users/register" />
      </Box>
      <Table />
    </div>
  );
};
