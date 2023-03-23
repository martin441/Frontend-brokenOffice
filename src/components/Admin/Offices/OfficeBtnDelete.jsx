import * as React from "react";
import {  Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteOffice } from "../../../state/office";
import toast from "react-hot-toast";


export default function OfficeBtnDelete({office}) {
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(deleteOffice(office))
    toast.success('Office deleted successfully')
  }

  return (
    <div>
      <Button
        component="button"
        variant="body2"
        sx={{ mt:2}}
        color='error'
        onClick={handleClick}
      >
         <DeleteIcon />
      </Button>
    </div>
  );
}