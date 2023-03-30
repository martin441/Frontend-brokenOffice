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

function createData(title, state) {
  return { title, state };
}

const tickets = [
  createData("Broken Phone", "Pending"),
  createData("Broken Chair", "Completed"),
  createData("Broken Laptop", "Rejected"),
  createData("Broken HDMI", "completed"),
  createData("Broken Headphones", "Mariano"),
  createData("Broken Phone", "Pending"),
  createData("Broken Chair", "Completed"),
  createData("Broken Laptop", "Rejected"),
  createData("Broken HDMI", "completed"),
  createData("Broken Headphones", "Mariano"),
];

export const ReportListHomeUser = () => {

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
            {tickets.map((ticket) => {
              return (
                <>
                  <TableRow hover role="checkbox" tabIndex={-1} key={ticket.id}>
                    <TableCell key={(ticket.id += 1)} align={"center"}>
                      {ticket.title}
                    </TableCell>

                    <TableCell key={(ticket.id += 1)} align={"center"}>
                      {ticket.state}
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
