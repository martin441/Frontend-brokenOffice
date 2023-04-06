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
import { axiosGetAssignedReportsService } from "../../../utils/axios";
import { setAssignedReports } from "../../../state/service";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function ServerReportList() {
  const reports = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const type = useSelector((state) => state.user.type);
  const columns = Columns(type);
  const navigate = useNavigate()

  React.useEffect(() => {
    axiosGetAssignedReportsService().then((reports) => {
      dispatch(setAssignedReports(reports));
    });
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
    <Box sx={{ height: "85vh", width: "100%" }}>
        <Typography variant="h4" sx={{my: 2}}>Assigned Reports</Typography>
      <DataGrid
        sx={{ padding: 1 }}
        columns={columns}
        rows={reports}
        rowHeight={80}
        getRowId={(row) => row._id}
        slots={{ toolbar: CustomToolbar }}
        onRowClick={(event, rowData) => {
            navigate(`/service/ticket/${event.id}`);
          }}
      />
    </Box>
  );
}
