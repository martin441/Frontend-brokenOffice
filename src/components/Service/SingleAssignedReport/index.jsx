import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BackLink } from "../../../commons/BackLink";
import { ReportDataService } from "./ReportData";

export const SingleTicketService = () => {
  const { id } = useParams();

  const [singleReport, setSingleReport] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ROUTE}/reports/single/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setSingleReport(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Box sx={{ ml: 2 }}>
        <BackLink text="Back to Assigned Reports" href="/service/report/all" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Report
      </Typography>
      <ReportDataService singleReport={singleReport} />
    </Box>
  );
};
