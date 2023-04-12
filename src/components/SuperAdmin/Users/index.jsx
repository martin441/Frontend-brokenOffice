import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { AddBtn } from "../../../commons/AddBtn";

import RadioGroup from "../../../commons/RadioGroup";

import { muiOfficeBar } from "../../../utils/styleMUI";

import Table from "../../Admin/Users/Table";

const SuperAdminView = () => {
  const userType = useSelector((state) => state.user.type);

  const [type, setType] = useState(localStorage.getItem("type") || "all");

  return (
    <div>
       <Box sx={muiOfficeBar}>
        <Typography variant="h4">Users</Typography>
        <AddBtn href="/superadmin/users/register" text="New User" />
      </Box>
        <RadioGroup setForType={[type, setType]} />
      <Table type={userType} filterForType={type} />
      </div>
)
}
export default SuperAdminView