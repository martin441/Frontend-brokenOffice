import { Box } from "@mui/system";
import { useState } from "react";
import { AddBtn } from "../../../commons/AddBtn";
import Table from "./Table/index";
import RadioGroup from "../../../commons/RadioGroup"

export const AdminView = () => {
  const [type, setType] = useState(localStorage.getItem("value") || "all");
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
        <AddBtn href="/admin/users/register" />
      <RadioGroup setForType={[type, setType]} />
      </Box>
      <Table filterForType={type}/>
    </div>
  );
};
