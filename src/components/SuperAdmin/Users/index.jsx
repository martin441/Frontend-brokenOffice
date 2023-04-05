import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { AddBtn } from "../../../commons/AddBtn";
import { muiOfficeBar } from "../../../utils/styleMUI";
import Table from "../../Admin/Users/Table";

export const SuperAdminView = () => {
  const userType = useSelector((state) => state.user.type);

  return (
    <div>
      <Box sx={muiOfficeBar}>
        <Typography variant="h4">Users</Typography>
        <AddBtn href="/superadmin/users/register" text="New User" />
      </Box>
      <Table type={userType} />
    </div>
  );
};
