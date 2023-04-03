import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


export const ReportListHomeUser = () => {
  const reports = useSelector((state) => state.allReports);

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
          <TableBody style={{ overflow: 'auto' }}>
            {reports.map((ticket) => {
              return (
                <>
                  <TableRow hover role="checkbox" tabIndex={-1} key={ticket.id}>
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
