import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export const ReportButtonGroup = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{my: 3}}
      >
        <Button>Rejected</Button>
        <Button>Pending</Button>
        <Button>Completed</Button>
      </ButtonGroup>
    </>
  );
};
