import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { AddBtn } from "../../../commons/AddBtn";
import Table from "../../Admin/Users/Table"

export const SuperAdminView = () => {
  const userType = useSelector(state => state.user.type)
  
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", padding: 2 }}>
        <AddBtn href="/superadmin/users/register" />
      </Box>
      <Table type={userType}/>
    </div>
  );
};
