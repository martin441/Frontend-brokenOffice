import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddBtn } from "../../../commons/AddBtn";

import RadioGroup from "../../../commons/RadioGroup";

import { muiOfficeBar } from "../../../utils/styleMUI";

import Table from "../../Admin/Users/Table";

export const SuperAdminView = () => {
  const userType = useSelector((state) => state.user.type);

  const [type, setType] = useState(localStorage.getItem("type") || "all");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          gap: 2,
        }}
      >
        <AddBtn href="/superadmin/users/register" />
        <RadioGroup setForType={[type, setType]} />
      </Box>
      <Table type={userType} filterForType={type} />


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
