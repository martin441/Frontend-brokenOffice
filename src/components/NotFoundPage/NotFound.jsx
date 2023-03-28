import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container-home home-text">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3">Error 404: Page not found</Typography>
        <Typography variant="h6">
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20, mt: 3 }}
          onClick={() => navigate("/")}
        >
          HOME PAGE
        </Button>
      </Box>
    </div>
  );
};

export default NotFoundPage;
