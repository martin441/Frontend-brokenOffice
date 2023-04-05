import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setAssignedReports } from "../../../state/service";
import { axiosGetAssignedReportsService } from "../../../utils/axios";


export const ReportListHomeService = () => {
  const reports = useSelector((state) => state.service);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  React.useEffect(() => {
    axiosGetAssignedReportsService().then((reports) => {
      dispatch(setAssignedReports(reports));
    });
  }, [dispatch]);

  return (
    <div>
      {" "}
      <TableContainer sx={{ maxHeight: "35vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }} align={"center"}>
                Title
              </TableCell>
              <TableCell style={{ minWidth: 100 }} align={"center"}>
                Issuer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports
              .filter((ticket) => ticket.status === "issued")
              .map((ticket) => {
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={ticket._id}
                      onClick={() => navigate(`/service/ticket/${ticket._id}`)}
                    >
                      <TableCell key={(ticket.date)} align={"center"}>
                        {ticket.title}
                      </TableCell>

                      <TableCell key={(ticket.title)} align={"center"}>
                        {ticket.issuer.name} {ticket.issuer.lastName}
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
