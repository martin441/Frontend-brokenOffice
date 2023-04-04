import * as React from "react";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import Modal from "@mui/material/Modal";
import { styleEditProfile } from "../../utils/styleMUI";
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AddressAutocomplete from "mui-address-autocomplete";
import { setUser } from "../../state/user";

export default function EditProfile() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const offices = useSelector((state) => state.office);

  const [inputName, setInputName] = React.useState(user?.name);
  const [inputLastName, setInputLastName] = React.useState(user?.lastName);
  const [inputRole, setInputRole] = React.useState(user?.role);
  const [inputAddress, setInputAddress] = React.useState(user?.addressName);
  const [inputOffice, setInputOffice] = React.useState(user?.office);
  const [addressCoor, setAddressCoor] = React.useState([]);

  function handleAddressChange(value) {
    if (value) {
      setInputAddress(value?.description);
    } else {
      setInputAddress("");
    }
    const lat = value?.geometry.location.lat();
    const lng = value?.geometry.location.lng();
    setAddressCoor([lng, lat]);
    if (!value) toast.error("Address not valid");
  }
  
  const handleSubmit = async () => {
    if (
      inputName === "" ||
      inputLastName === "" ||
      inputRole === ""
    )
      return toast.error("Please enter required data");

    const obj = {
      name: inputName,
      lastName: inputLastName,
      role: inputRole,
      addressName: inputAddress,
      addressCoor: { type: "Point", coordinates: addressCoor },
      office: inputOffice,
    };

    try {
     
      const { data } = await axios.put(`${ROUTE}/user/edit/profile`, obj, {
        withCredentials: true,
      });
      dispatch(setUser(data));
      toast.success("Profile changed successfully");
      handleClose();
    } catch (err) {
      toast.error("Could not change Profile");
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
            label="Role"
            multiline
            placeholder="New role..."
            variant="standard"
            value={inputRole}
            onChange={(e) => setInputRole(e.target.value)}
            sx={{ mb: ".5rem" }}
          />
          <Typography>Current Office: {user.office.address?.street}, {user.office?.name}</Typography>
          <TextField
            sx={{ mt: 1 }}
            select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputOffice}
            label="Office"
            name="Office"
            onChange={(e) => setInputOffice(e.target.value)}
          >
            {offices?.map((office) => (
              <MenuItem
                value={office?._id}
                key={office?._id}
              >{`${office?.name}, ${office?.address.street}`}</MenuItem>
            ))}
          </TextField>
          <AddressAutocomplete
            sx={{ mt: 2 }}
            apiKey={process.env.REACT_APP_API_KEY}
            label="Address"
            fields={["geometry"]} // fields will always contain address_components and formatted_address, no need to repeat them
            onChange={(_, value) => {
              handleAddressChange(value);
            }}
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
