import { CheckBox } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import scss from "./Profile.module.scss";

const Profile = () => {
  const { data: session } = useSession();
  const names = session?.user?.name ? session?.user?.name.split(" ") : [];
  const email = session?.user?.email ? session?.user?.email : [];
  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : "";

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1>Profile</h1>
      <Box>
        <Typography variant={"h4"} sx={{ paddingBottom: 4 }}>
          Hey,{" "}
          {session?.user?.name
            ? `${session?.user?.name} Welcome to your profile`
            : "User, You need to sign in"}
        </Typography>
        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid2 container justifyContent="center">
            <Grid2 item xs={12} sm={8} md={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                  src={session?.user?.image as string}
                ></Avatar>
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 1000, margin: "0 auto" }}
              >
                <Grid2 className={scss.formWrap}>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <FormControlLabel
                      control={
                        <CheckBox
                          name="receiveEmails"
                          checked={formData.receiveEmails}
                          onChange={handleFormChange}
                          color="primary"
                        />
                      }
                      label="receieve sales analytics emails"
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid2>
                </Grid2>
              </form>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
