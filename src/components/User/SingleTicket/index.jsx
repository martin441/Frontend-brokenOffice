import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReportData } from "./ReportData";
import { BackLink } from "../../../commons/BackLink";

export const SingleTicket = () => {
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
        margin: 1,
      }}
    >
      <BackLink text="Back to Reports" href="/user/history" />

      <Typography variant="h4" gutterBottom>
        Report Details
      </Typography>
      <ReportData singleReport={singleReport} />
    </Box>
  );
};
