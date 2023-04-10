import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

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

export const History = ({ reportsOtherUser }) => {
  let reports = useSelector((state) => state.allReports);
  const navigate = useNavigate();
  const [rowData, setRowData] = React.useState("");

  React.useEffect(() => {
    reportsOtherUser ? setRowData(reportsOtherUser) : setRowData(reports);
  }, [reports, reportsOtherUser]);

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Typography sx={{ mt: 4 }} gutterBottom variant="h4" component="div">
        History
      </Typography>
      <DataGrid
        sx={{ padding: 1 }}
        columns={columns}
        rows={rowData}
        rowHeight={80}
        getRowId={(row) => row._id}
        slots={{ toolbar: CustomToolbar }}
        onRowClick={(event, rowData) => {
          navigate(`/user/ticket/${event.id}`);
        }}
      />
    </div>
  );
};
