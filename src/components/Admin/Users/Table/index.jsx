import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetAllUsers } from "../../../../utils/axios";
import { deleteUser, setAllUsers } from "../../../../state/allUsers";
import { Columns } from "./Columns";

export default function BasicExampleDataGrid() {
  const users = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const columns = Columns();

  React.useEffect(() => {
    axiosGetAllUsers().then((users) => dispatch(setAllUsers(users)));
  }, [dispatch]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        sx={{ padding: 1 }}
        columns={columns}
        rows={users}
        rowHeight={80}
        getRowId={(row) => row._id}
        slots={{ toolbar: CustomToolbar }}
      />
    </Box>
  );
}
