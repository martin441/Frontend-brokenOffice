import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import getGeolocation from "../../../utils/geoLocation";
import { axiosGetAddressFromCoord } from "../../../utils/axios";
import AddressAutocomplete from "mui-address-autocomplete";

export default function LocationForm() {
  const [choice, setChoice] = React.useState("currentAddress");
  const [geolocation, setGeolocation] = React.useState({});
  const [address, setAddress] = React.useState("");

  React.useEffect(() => {
    if (choice === "newAddress") {
      getGeolocation()
        .then((position) => {
          setGeolocation(position);
          axiosGetAddressFromCoord(position.lat, position.lng).then((address) =>
            setAddress(address)
          );
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [choice]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="currentAddress"
              name="radio-buttons-group"
              onChange={(e) => setChoice(e.target.value)}
            >
              <FormControlLabel
                value="currentAddress"
                control={<Radio />}
                label="Keep my current address"
              />
              <FormControlLabel
                value="newAddress"
                control={<Radio />}
                label="Geolocate me"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {choice === "newAddress" && (
          <>
            <Grid item xs={12} md={12}>
              <Typography>{`Result address: ${address}`}</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>Not correct?</Typography>
              <AddressAutocomplete
                sx={{ mt: 2 }}
                apiKey={process.env.REACT_APP_API_KEY}
                label="Address"
                fields={["geometry"]} // fields will always contain address_components and formatted_address, no need to repeat them
                onChange={(_, value) => {
                  if (value) setAddress(value.formatted_address);
                }}
              />
            </Grid>
          </>
        )}
      </Grid>
      <Grid sx={{ mt: 2 }} item xs={12} md={6}>
        <Typography> Please choose the Service Desk that suits you best</Typography>
      <FormControl fullWidth>
        <InputLabel sx={{ mt: 2 }} id="demo-simple-select-label">
         Service Desk
        </InputLabel>
        <Select
          sx={{ mt: 2 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Desk"
          onChange={""}
        >
          <MenuItem value={"Office1"}>Office1</MenuItem>
          <MenuItem value={"Office2"}>Office2</MenuItem>
          <MenuItem value={"Office3"}>Office3</MenuItem>
        </Select>
      </FormControl>
      </Grid>
    </React.Fragment>
  );
}
