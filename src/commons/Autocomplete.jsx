import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useLoadScript } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { setAddress } from "../state/address";

const PlacesAutocomplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });
const dispatch = useDispatch()


  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    dispatch(setAddress({ lat, lng, address }));
  };

  return (
    <>
      {isLoaded ? (
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="combobox-input"
            placeholder="Search an address"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PlacesAutocomplete;
