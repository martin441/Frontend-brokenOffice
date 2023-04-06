import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setAllReports } from "../../../state/allReports";
import { axiosGetReportHistory } from "../../../utils/axios";

export const ReportListHomeUser = () => {
  const reports = useSelector((state) => state.allReports);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axiosGetReportHistory().then((data) => dispatch(setAllReports(data)));
  }, [dispatch]);

  return (
    <div>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }} align={"center"}>
                Title
              </TableCell>
              <TableCell style={{ minWidth: 100 }} align={"center"}>
                State
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: "auto" }}>
            {reports?.map((ticket) => {
              return (
                <>
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={ticket._id}
                    onClick={() => navigate(`/user/ticket/${ticket._id}`)}
                  >
                    <TableCell key={ticket._id} align={"center"}>
                      {ticket.title}
                    </TableCell>

                    <TableCell key={ticket._id} align={"center"}>
                      {ticket.status}
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
