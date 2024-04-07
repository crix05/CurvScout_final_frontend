import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Dashboard } from "./dashboard";
import { useState, useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [responseData, setResponseData] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/patient_profile/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      const responseData = await response.json(); // Assuming server returns JSON response
      console.log("Form data submitted successfully:", responseData);
      setResponseData(responseData);
      setShowDashboard(true); // Show the dashboard after successful sign-in
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      {!showDashboard && (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
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
                Patient Profile
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="mobile_no"
                      label="Mobile Number"
                      name="mobile_no"
                      autoComplete="mobile_no"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="age"
                      label="Age"
                      name="age"
                      autoComplete="age"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="gender"
                      label="Gender"
                      name="gender"
                      autoComplete="gender"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="weight"
                      label="Weight"
                      name="weight"
                      autoComplete="weight"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="height"
                      label="Height"
                      name="height"
                      autoComplete="height"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="blood_group"
                      label="Blood Group"
                      name="blood_group"
                      autoComplete="blood_group"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="medical_history"
                      label="Medical History"
                      name="medical_history"
                      autoComplete="medical_history"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="blood_pressure_systolic"
                      label="Blood Pressure (Systolic)"
                      name="blood_pressure_systolic"
                      autoComplete="blood_pressure_systolic"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="blood_pressure_diastolic"
                      label="Blood Pressure (Diastolic)"
                      name="blood_pressure_diastolic"
                      autoComplete="blood_pressure_diastolic"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="xray_image"
                      label="X-ray Image"
                      name="xray_image"
                      type="file"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>

                <Box mt={5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  ></Typography>
                </Box>
              </Box>
              {loading && <Loader />}
            </Box>
          </Grid>
        </Grid>
      )}
      {showDashboard && <Dashboard responseData={responseData} />}
    </ThemeProvider>
  );
}

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // translucent black background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // ensure it's on top
      }}
    >
      <div
        style={{
          color: "blue", // blue color for loading text
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    </div>
  );
};
