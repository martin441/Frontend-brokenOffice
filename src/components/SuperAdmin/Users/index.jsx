import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddBtn } from "../../../commons/AddBtn";
import RadioGroup from "../../../commons/RadioGroup";
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
    </div>
  );
};
