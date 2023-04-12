import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box className="header-container-home home-text">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3">Hey Glober!</Typography>
        <Typography variant="h6">
          Looks like you are not signed in...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20, mt: 3, backgroundColor: "white" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home