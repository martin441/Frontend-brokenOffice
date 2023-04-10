import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { styleEditProfile } from "../../utils/styleMUI";
import { toast } from "react-hot-toast";
import { axiosShareReport } from "../../utils/axios";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const History = ({ reportsOtherUser }) => {
  const reports = useSelector((state) => state.allReports);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [reportId, setReportId] = React.useState("");
  const [email, setEmail] = React.useState("");
  
  const [rowData, setRowData] = React.useState("");
  React.useEffect(() => {
    reportsOtherUser ? setRowData(reportsOtherUser) : setRowData(reports);
  }, [reports, reportsOtherUser]);

  const columns = [
    {
      field: "title",
      headerName: "Title",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      editable: false,
      renderCell: (params) => {
        return (<Box sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}>
        <Box>
        <IconButton
          sx={{ padding: 0 }}
          onClick={(event) => {
            event.stopPropagation()
            setOpen(true)
            setReportId(params.row._id)
          }}
        >
          <ShareIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{marginX:1}}>
      {params.row.title}
      </Box>
    </Box>)
      }
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

  const handleSubmit = async () => {
    const mailValidation = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/);
    if (!mailValidation.test(email)) return toast.error("Write a valid email")
    try {
      await axiosShareReport(reportId, email)
      toast.success("Report was sent successfully")
      setOpen(false)
      setReportId("")
      setEmail("")
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong...")
    }
  }

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Modal open={open}
        onClose={() => {
          setOpen(false)
          setReportId("")
          setEmail("")
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={styleEditProfile} component="form">
          <TextField label="email to share report" onChange={(e) => setEmail(e.target.value)} />
          <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 2, mx: "auto" }}
            >
              Send
            </Button>
          </Box>
      </Modal>
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
          navigate(`/user/ticket/${event.id}`)
        }}
      />
    </div>
  );
};
