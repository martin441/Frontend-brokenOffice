import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReportData } from "./ReportData";

import { Link } from "react-router-dom";

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
      <Box marginLeft={"30px"}>
      <BackLink text="Back to History" href="/user/history" />
      </Box>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center'}}>
        Report

      </Typography>
      {singleReport ? (
        <ReportData singleReport={singleReport} />
      ) : (
        <LinearProgress />
      )}
    </Box>
  );
};
