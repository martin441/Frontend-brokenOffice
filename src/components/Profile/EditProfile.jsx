import * as React from "react";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import Modal from "@mui/material/Modal";
import { styleEditProfile } from "../../utils/styleMUI";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../state/user";


export default function EditProfile() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  

  const [inputName, setInputName] = React.useState(user?.name);
  const [inputLastName, setInputLastName] = React.useState(user?.lastName);
  const [inputEmail, setinputEmail] = React.useState(user?.email);
  const [inputRole, setInputRole] = React.useState(user?.role);
  const [inputAddress, setInputAddress] = React.useState(user?.address);

  const handleSubmit = async () => {
    if (
      inputName === "" ||
      inputLastName === "" ||
      inputEmail === "" ||
      inputRole === ""
    ) return toast.error("Please enter required data");
  
    const obj = {
      name: inputName,
      lastName: inputLastName,
      email: inputEmail,
      role: inputRole,
      address: inputAddress,
    };
    
    try {
      const { data } = await axios.put(`${ROUTE}/user/edit/profile`, obj, { withCredentials: true });
      dispatch(setUser(data));
      toast.success("Profile changed successfully ")
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div>
      <Button
        variant="contained"
        sx={{ mt: "1rem", borderRadius: 20 }}
        onClick={handleOpen}
      >
        EDIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEditProfile} component="form">
          <TextField
            id="standard-multiline-static"
            label="Name"
            multiline
            placeholder="New name..."
            variant="standard"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Last Name"
            multiline
            placeholder="New lastName..."
            variant="standard"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Email"
            multiline
            placeholder="New email..."
            variant="standard"
            value={inputEmail}
            onChange={(e) => setinputEmail(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Role"
            multiline
            placeholder="New role..."
            variant="standard"
            value={inputRole}
            onChange={(e) => setInputRole(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <TextField
            id="standard-multiline-static"
            label="Address"
            multiline
            placeholder="New address..."
            variant="standard"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2, mx: "auto" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
