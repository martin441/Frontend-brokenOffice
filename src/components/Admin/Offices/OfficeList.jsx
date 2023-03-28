import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OfficeModalEdit from "./OfficeModalEdit";
import { setOffices } from "../../../state/office";
import { Box } from "@mui/system";
import { muiOfficeBar } from "../../../utils/styleMUI";
import { OfficeAddBtn } from "./Add/OfficeAddBtn";
import OfficeBtnDelete from "./OfficeBtnDelete";
import { axiosGetAllOffices } from "../../../utils/axios";

export default function OfficeList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const offices = useSelector((state) => state.office);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const offices = axiosGetAllOffices();
    offices.then((offices) => dispatch(setOffices(offices)));
  }, [dispatch]);

  return (
    <>
      <Box sx={muiOfficeBar}>
        <OfficeAddBtn />
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden", m: "0 auto" }}>
        <TableContainer sx={{ maxHeight: "100vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100 }} align={"center"}>
                  Region
                </TableCell>
                <TableCell style={{ minWidth: 100 }} align={"center"}>
                  Adress
                </TableCell>
                <TableCell style={{ minWidth: 50 }} align={"center"}>
                  Edit
                </TableCell>
                <TableCell style={{ minWidth: 50 }} align={"center"}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {offices &&
                offices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((office) => {
                    return (
                      <>
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={`${office.name}123`}
                        >
                          <TableCell key={office.address.street} align={"center"}>
                            {office.name}
                          </TableCell>

                          <TableCell key={office.address.zip} align={"center"}>
                            {`${office.address?.street}, ${office.address?.zip}, ${office.address?.floor}`}
                          </TableCell>

                          <TableCell key={office._id} align={"center"}>
                            <Link>
                              <OfficeModalEdit office={office} />
                            </Link>
                          </TableCell>
                          <TableCell key={office.name} align={"center"}>
                            <Link>
                              <OfficeBtnDelete office={office} />
                            </Link>
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={offices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
