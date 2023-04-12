import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBtn from "../../../../commons/DeleteBtn";
import { changeTypeUser } from "../../../../state/changeTypeUser";
import checkType from "../../../../utils/checkType";

<<<<<<< HEAD
export const Columns = (type, handleOpen, handleClick) => {
=======
export const Columns = (type, handleOpen, handleConfirm) => {
>>>>>>> develop
  let columns = [];
  const dispatch = useDispatch();

  const number = checkType(type);

<<<<<<< HEAD
=======
  const handleClick = (user) => {
    if (
      user.type === process.env.REACT_APP_ALPHA &&
      userType !== process.env.REACT_APP_OMEGA
    )
      return toast.error("You can't delete another admin");
    if (
      user.type === process.env.REACT_APP_OMEGA
    )
      return toast.error("Can't delete the owner");
    handleConfirm(user.email)
  };
>>>>>>> develop
  return number === 32
    ? (columns = [
        {
          field: "fullName",
          headerName: "Full name",
          headerAlign: "center",
          align: "center",
          description: "This column has a value getter and is not sortable.",
          sortable: true,
          flex: 0.5,
          valueGetter: (params) =>
            `${params.row.name || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "role",
          headerName: "Type",
          headerAlign: "center",
          align: "center",
          flex: 0.5,
          editable: false,
          renderCell: (params) => {
            switch (checkType(params.row.type)) {
              case 66:
                return (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {/* <Box sx={{backgroundColor:'red', flexWrap: "wrap", display:'flex', justifyContent:'space-between', alignItems: "center", width:'100px'}}> */}
                    <Box sx={{ marginX: 2 }}>
                      <p>Admin</p>
                    </Box>
                    <Box>
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          dispatch(changeTypeUser(params.row));
                          handleOpen();
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                );
              case 14:
                return (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ marginX: 1.5 }}>
                      <p>Service</p>
                    </Box>
                    <Box>
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          dispatch(changeTypeUser(params.row));
                          handleOpen();
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                );
              case 21:
                return (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ marginX: 1 }}>
                      <p>Standard</p>
                    </Box>
                    <Box>
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          dispatch(changeTypeUser(params.row));
                          handleOpen();
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                );
              default:
                return "";
            }
          },
        },
        {
          field: "addressName",
          headerName: "Region",
          headerAlign: "center",
          align: "center",
          flex: 0.5,
          editable: false,
          valueGetter: (params) =>
            !params.row.addressName ? "(No region)" : params.row.addressName,
        },
        {
          headerName: "Delete",
          headerAlign: "center",
          align: "center",
          sortable: false,
          flex: 0.5,
          editable: false,
          renderCell: (params) => (
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleClick(params.row);
              }}
            >
              <DeleteBtn />
            </IconButton>
          ),
        },
      ])
    : // eslint-disable-next-line no-unused-vars
      (columns = [
        {
          field: "fullName",
          headerName: "Full name",
          headerAlign: "center",
          align: "center",
          description: "This column has a value getter and is not sortable.",
          sortable: true,
          flex: 0.5,
          editable: false,
          valueGetter: (params) =>
            `${params.row.name || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "type",
          headerName: "Type",
          headerAlign: "center",
          align: "center",
          flex: 0.5,
          editable: false,
          renderCell: (params) => {
            switch (checkType(params.row.type)) {
              case 66:
                return "Admin";
              case 14:
                return "Services";
              case 21:
                return "Standard";
              default:
                return "";
            }
          },
        },
        {
          field: "addressName",
          headerName: "Region",
          headerAlign: "center",
          align: "center",
          flex: 0.5,
          editable: false,
          valueGetter: (params) =>
            !params.row.addressName ? "(No region)" : params.row.addressName,
        },
        {
          headerName: "Delete",
          headerAlign: "center",
          align: "center",
          sortable: false,
          flex: 0.5,
          editable: false,
          renderCell: (params) => (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleClick(params.row);
              }}
            >
              <DeleteBtn />
            </IconButton>
          ),
        },
      ]);
};
