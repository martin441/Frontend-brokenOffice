import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function createData(title, sender) {
  return { title, sender };
}

const tickets = [
  createData("Broken Phone", "Pepe"),
  createData("Broken Chair", "Sandra"),
  createData("Broken Laptop", "Mariela"),
  createData("Broken HDMI", "Karina"),
  createData("Broken Headphones", "Mariano"),
  createData("Broken Phone", "Pepe"),
  createData("Broken Chair", "Sandra"),
  createData("Broken Laptop", "Mariela"),
  createData("Broken HDMI", "Karina"),
  createData("Broken Headphones", "Mariano"),
  createData("Broken Phone", "Pepe"),
  createData("Broken Chair", "Sandra"),
  createData("Broken Laptop", "Mariela"),
  createData("Broken HDMI", "Karina"),
  createData("Broken Headphones", "Mariano"),
];

export default function ReportList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", m: '0 auto' }}>
      <TableContainer sx={{ maxHeight: '100vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100 }} align={"center"} >Title</TableCell>
              <TableCell style={{ minWidth: 100 }} align={"center"} >Sender</TableCell>
              <TableCell style={{ minWidth: 100 }} align={"center"} >Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ticket) => {
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={ticket.id}
                    >
                      <TableCell key={(ticket.id += 1)} align={"center"}>
                        {ticket.title}
                      </TableCell>

                      <TableCell key={(ticket.id += 1)} align={"center"}>
                        {ticket.sender}
                      </TableCell>

                      <TableCell key={(ticket.id += 2)} align={"center"}>
                        <Button>
                          <AddCircleIcon />
                        </Button>
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
        count={tickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
