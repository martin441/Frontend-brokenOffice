import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { History } from "../../../History";
import { UserData } from "./UserData";

export const SingleUser = () => {
  const { id } = useParams();

  const [singleUser, setSingleUser] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ROUTE}/collaborators/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setSingleUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        User
      </Typography>
      {singleUser ? (
        <>
          <UserData singleUser={singleUser} />
          <History reportsOtherUser={singleUser.reports} />
        </>
      ) : (
        <LinearProgress />
      )}
    </Box>
  );
};
