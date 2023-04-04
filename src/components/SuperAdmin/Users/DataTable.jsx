import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { axiosDeleteUser, axiosGetAllUsers } from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setAllUsers } from "../../../state/allUsers";
import checkType from "../../../utils/checkType";
import { Link } from "react-router-dom";
import DeleteBtn from "../../../commons/DeleteBtn";
import { toast } from "react-hot-toast";

export default function DataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axiosGetAllUsers().then((users) => dispatch(setAllUsers(users)));
  }, [dispatch]);

  function handleClick(user) {
    if (user.type === process.env.REACT_APP_ALPHA)
      return toast.error("You can't delete another admin");
    axiosDeleteUser(user.email);
    dispatch(deleteUser(user.email));
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", my: 5 }}>
      <TableContainer sx={{ maxHeight: "100vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 25 }} align={"center"}>
                Full Name
              </TableCell>
              <TableCell style={{ minWidth: 25 }} align={"center"}>
                Type
              </TableCell>
              <TableCell style={{ minWidth: 25 }} align={"center"}>
                Region
              </TableCell>
              <TableCell style={{ minWidth: 25 }} align={"center"}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((user) => {
                // eslint-disable-next-line array-callback-return
                if (user.type === process.env.REACT_APP_OMEGA) return;
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`${user.name}cc`}
                    >
                      <TableCell key={`${user.name}aa`} align={"center"}>
                        {`${user.name} ${user.lastName} `}
                      </TableCell>

                      <TableCell key={`${user.lastName}bb`} align={"center"}>
                        {(() => {
                          switch (checkType(user.type)) {
                            case 66:
                              return "Admin";
                            case 14:
                              return "Service";
                            case 21:
                              return "Standard";
                            default:
                              return "";
                          }
                        })()}
                      </TableCell>
                      <TableCell key={`${user.name}sx`} align={"center"}>
                        {user.addressName
                          ? user.addressName.split(",")[1]
                          : "no region"}
                      </TableCell>
                      <TableCell key={user.type} align={"center"}>
                        <Link onClick={() => handleClick(user)}>
                          <DeleteBtn />
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
