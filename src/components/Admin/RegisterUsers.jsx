import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { Form } from "./Form";
import { BackLink } from "../../commons/BackLink";

export const RegisterUsers = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
       <BackLink text="Back to Users" />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register <PeopleIcon fontSize="small" />
        </Typography>
        <Form handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};
