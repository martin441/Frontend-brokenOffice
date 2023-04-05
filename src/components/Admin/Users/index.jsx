import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AddBtn } from "../../../commons/AddBtn";
import { muiOfficeBar } from "../../../utils/styleMUI";
import Table from "./Table/index"

export const AdminView = () => {
  return (
    <div>
      <Box sx={muiOfficeBar}>
      <Typography variant="h4">Users</Typography>
        <AddBtn href="/admin/users/register" text='New User' />
      </Box>
      <Table />
    </div>
  );
};
