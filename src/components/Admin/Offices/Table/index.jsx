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

import { Columns } from "./Columns";

import { axiosDeleteOffice } from "../../../../utils/axios";
import { deleteOffice } from "../../../../state/office";

export default function BasicExampleDataGrid({ type, offices }) {
  const dispatch = useDispatch();

  function handleClick(id) {
    axiosDeleteOffice(id);
    dispatch(deleteOffice(id));
  }

  const columns = Columns(type, handleClick);

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
    <Box sx={{ height: "85vh", width: "100%" }}>
      <DataGrid
        sx={{ padding: 1 }}
        columns={columns}
        rows={offices}
        rowHeight={80}
        getRowId={(row) => row._id}
        slots={{ toolbar: CustomToolbar }}
      />
    </Box>
  );
}
