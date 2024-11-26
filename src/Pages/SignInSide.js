// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Dashboard from "./dashboard.jsx";
// import { useState, useEffect } from "react";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignInSide() {
//   const [responseData, setResponseData] = useState(null);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     setLoading(true);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/patient_profile/", {
//         method: "POST",
//         body: data,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form data");
//       }

//       const responseData = await response.json(); // Assuming server returns JSON response
//       console.log("Form data submitted successfully:", responseData);
//       setResponseData(responseData);
//       setShowDashboard(true); // Show the dashboard after successful sign-in
//     } catch (error) {
//       console.error("Error submitting form data:", error.message);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <ThemeProvider theme={createTheme()}>
//       {!showDashboard && (
//         <Grid container component="main" sx={{ height: "98vh" }}>
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundImage:
//                 "url(http://localhost:8000/staticfiles/admin/img/main.jpeg)",
//               backgroundRepeat: "no-repeat",
//               backgroundColor: (t) =>
//                 t.palette.mode === "light"
//                   ? t.palette.grey[50]
//                   : t.palette.grey[900],
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 height: "100%", // Set height to 100%
//                 justifyContent: "center", // Center content vertically
//                 mt: 0,
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Patient Profile
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 1 }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="name"
//                       label="Name"
//                       name="name"
//                       autoComplete="name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="mobile_no"
//                       label="Mobile Number"
//                       name="mobile_no"
//                       autoComplete="mobile_no"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="age"
//                       label="Age"
//                       name="age"
//                       autoComplete="age"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="gender"
//                       label="Gender"
//                       name="gender"
//                       autoComplete="gender"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="weight"
//                       label="Weight"
//                       name="weight"
//                       autoComplete="weight"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="height"
//                       label="Height"
//                       name="height"
//                       autoComplete="height"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="blood_group"
//                       label="Blood Group"
//                       name="blood_group"
//                       autoComplete="blood_group"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="medical_history"
//                       label="Medical History"
//                       name="medical_history"
//                       autoComplete="medical_history"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="blood_pressure_systolic"
//                       label="Blood Pressure (Systolic)"
//                       name="blood_pressure_systolic"
//                       autoComplete="blood_pressure_systolic"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="blood_pressure_diastolic"
//                       label="Blood Pressure (Diastolic)"
//                       name="blood_pressure_diastolic"
//                       autoComplete="blood_pressure_diastolic"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="xray_image"
//                       label="X-ray Image"
//                       name="xray_image"
//                       type="file"
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                     />
//                   </Grid>
//                 </Grid>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Submit
//                 </Button>

//                 <Box mt={5}>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     align="center"
//                   ></Typography>
//                 </Box>
//               </Box>
//               {loading && <Loader />}
//             </Box>
//           </Grid>
//         </Grid>
//       )}
//       {showDashboard && <Dashboard responseData={responseData} />}
//     </ThemeProvider>
//   );
// }

// const Loader = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.5)", // translucent black background
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999, // ensure it's on top
//       }}
//     >
//       <div
//         style={{
//           color: "blue", // blue color for loading text
//           fontSize: "24px",
//           fontWeight: "bold",
//         }}
//       >
//         Loading...
//       </div>
//     </div>
//   );
// };


import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dashboard from "./dashboard.jsx";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  age: Yup.number()
    .min(1, "Age must be at least 1")
    .max(120, "Age must be under 120")
    .required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  weight: Yup.number().required("Weight (in kg) is required"),
  height: Yup.number().required("Height (in ft) is required"),
  xray_image: Yup.mixed().required("X-ray image is required"),
});

const defaultTheme = createTheme();

export default function SignInSide() {
  const [responseData, setResponseData] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [xrayPreview, setXrayPreview] = useState(null); // State for X-ray preview
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile_no: "",
      age: "",
      gender: "",
      weight: "",
      height: "",
      xray_image: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      setLoading(true); 
      for (const key in values) {
        formData.append(key, values[key]);
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/patient_profile/", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }

        const data = await response.json();
        console.log("Form submitted successfully:", data);
        setResponseData(data);
        setShowDashboard(true);
      } catch (error) {
        console.error("Error submitting form data:", error.message);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      {!showDashboard && (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(http://localhost:8000/staticfiles/admin/img/main.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
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
                height: "95h",
                justifyContent: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Patient Profile
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={formik.handleSubmit}
                sx={{ mt: 5 }}
              >
                <Grid container spacing={4}>
                  {[{ name: "name", label: "Name" }, { name: "mobile_no", label: "Mobile Number" }, { name: "age", label: "Age" }].map(
                    (field) => (
                      <Grid item xs={12} sm={6} key={field.name}>
                        <TextField
                          fullWidth
                          id={field.name}
                          name={field.name}
                          label={field.label}
                          value={formik.values[field.name]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                          helperText={formik.touched[field.name] && formik.errors[field.name]}
                        />
                      </Grid>
                    )
                  )}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      id="gender"
                      name="gender"
                      label="Gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.gender && Boolean(formik.errors.gender)}
                      helperText={formik.touched.gender && formik.errors.gender}
                    >
                      {["Male", "Female", "Other"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  
                  {[{ name: "height", label: "Height (in cm)" }, { name: "weight", label: "Weight (in kg)" }].map(
                    (field) => (
                      <Grid item xs={12} sm={6} key={field.name}>
                        <TextField
                          fullWidth
                          id={field.name}
                          name={field.name}
                          label={field.label}
                          value={formik.values[field.name]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                          helperText={formik.touched[field.name] && formik.errors[field.name]}
                        />
                      </Grid>
                    )
                  )}
                  <Grid item xs={12}>
                    {!xrayPreview && <TextField
                      fullWidth
                      id="xray_image"
                      name="xray_image"
                      type="file"
                      label="Select Xray Image"
                      InputLabelProps={{ shrink: true }}
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        formik.setFieldValue("xray_image", file);
                        setXrayPreview(file ? URL.createObjectURL(file) : null); // Set preview URL
                      }}
                      error={formik.touched.xray_image && Boolean(formik.errors.xray_image)}
                      helperText={formik.touched.xray_image && formik.errors.xray_image}
                    />}
                  </Grid>

                  {xrayPreview && (
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        X-ray Preview (Click to change):
                      </Typography>
                      <img
                        src={xrayPreview}
                        alt="X-ray Preview"
                        style={{
                          width: "100%",
                          maxHeight: "250px",
                          objectFit: "contain",
                          cursor: "pointer",
                          marginLeft: "8.4vw",
                          marginTop: "-50px"
                        }}
                        onClick={() => document.getElementById("hiddenFileInput").click()} // Trigger the hidden file input
                      />
                      <input
                        id="hiddenFileInput"
                        type="file"
                      
                        style={{ display: "none" }} // Hide the file input
                        onChange={(event) => {
                          const file = event.target.files[0];
                          formik.setFieldValue("xray_image", file);
                          setXrayPreview(file ? URL.createObjectURL(file) : null); // Update preview URL
                        }}
                      />
                    </Grid>
                  )}

                </Grid>
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 0 }}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
      {showDashboard && <Dashboard responseData={responseData} />}
    </ThemeProvider>
  );
}