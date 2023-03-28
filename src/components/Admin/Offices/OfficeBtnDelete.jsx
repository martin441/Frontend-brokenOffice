import * as React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteOffice, setOffices } from "../../../state/office";
import { axiosDeleteOffice, axiosGetAllOffices } from "../../../utils/axios";

export default function OfficeBtnDelete({ office }) {
  const dispatch = useDispatch();

  function handleClick() {
    axiosDeleteOffice(office._id);
    dispatch(deleteOffice(office._id))
    const offices = axiosGetAllOffices();
    offices.then((offices) => dispatch(setOffices(offices)));
  }

  return (
    <div>
      <Button
        component="button"
        variant="body2"
        sx={{ mt: 2 }}
        color="error"
        onClick={handleClick}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}
