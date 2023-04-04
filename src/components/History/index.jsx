import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetReportHistory } from "../../utils/axios";
import { setAllReports } from "../../state/allReports";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: "title",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    editable: false,
  },
  {
    field: "status",
    headerName: "State",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    editable: false,
  },
];

export const History = () => {
  const reports = useSelector((state) => state.allReports);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <Typography sx={{ mt: 4 }} gutterBottom variant="h5" component="div">
        History
      </Typography>
      <DataGrid
        sx={{ padding: 1 }}
        columns={columns}
        rows={reports}
        rowHeight={80}
        getRowId={(row) => row._id}
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
  );
};
