import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useDispatch } from "react-redux";
import { setDescription, setTitle } from "../../../state/newReport";
import * as ml5 from "ml5";
import { Box } from "@mui/system";

export default function DescriptionForm() {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    }
  }

  useEffect(() => {
    if (imageSrc !== "") {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        let classifier = ml5.imageClassifier("MobileNet", function () {
          console.log("Model loaded.");
        });
        classifier.predict(img, gotResult);
      };
    }
  }, [imageSrc]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Incident Description
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="newTicketTitle"
            label="Title"
            name="title"
            type="text"
            autoFocus
            helperText="Provide a brief and descriptive title"
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="newTicketDescription"
            label="Description"
            type="text"
            id="newTicketDescription"
            helperText="Provide an explanation of what happened"
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button>
            <TextField
              variant="outlined"
              type="file"
              fullWidth
              onChange={(e) => handleFileChange(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                accept: ".jpg",
              }}
            />
          </Button>
          {file && (
            <Box
              component="img"
              alt="Input Image"
              src={imageSrc}
              sx={{ maxWidth: "100%" }}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
