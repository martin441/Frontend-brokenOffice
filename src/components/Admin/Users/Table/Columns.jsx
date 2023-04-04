import { Box, Grid, IconButton } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBtn from "../../../../commons/DeleteBtn";
import { deleteUser } from "../../../../state/allUsers";
import { axiosDeleteUser } from "../../../../utils/axios";
import checkType from "../../../../utils/checkType";

export const Columns = (type) => {
  let columns = [];
  const dispatch = useDispatch();
  const handleClick = (user) => {
    if (user.type === process.env.REACT_APP_ALPHA)
      return toast.error("You can't delete another admin");
    axiosDeleteUser(user.email);
    dispatch(deleteUser(user.email));
  };

  const HandleEdit = (user) => {
    
  }

  const number = checkType(type);

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
          editable: true,
          renderCell: (params) => {
            switch (checkType(params.row.type)) {
              case 66:
                return "Admin";
              case 14:
                return (
                  <Box sx={{display:'flex', width:'100%',justifyContent: 'center', alignItems:'center',flexWrap:'wrap', gap:1}} >
                    <Box>
                      <p>Service</p>
                    </Box>
                    <Box>
                      <IconButton sx={{padding:0}} onClick={(params) => HandleEdit(params.row)}>
                        <EditIcon fontSize="small"/>
                      </IconButton>
                    </Box>
                  </Box>
                );
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
            <IconButton onClick={() => handleClick(params.row)}>
              <DeleteBtn />
            </IconButton>
          ),
        },
      ])
    : "";
};
