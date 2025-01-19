import {
  Box,
  Button,
  FormControlLabel,
  Grid2,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import scss from "./Settings.module.scss";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);

  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    //ToDo: handle form submission
  };

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 className={scss.formWrap}>
            <FormControlLabel
              control={
                <Switch
                  checked={showRevenue}
                  onChange={handleShowRevenueChange}
                />
              }
              label="Revenue"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={showProfit}
                  onChange={handleShowProfitChange}
                />
              }
              label="Profit"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={showOrders}
                  onChange={handleShowOrdersChange}
                />
              }
              label="Orders"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={showCustomers}
                  onChange={handleShowCustomersChange}
                />
              }
              label="Customers"
            />
          </Grid2>
          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Save Settings
            </Button>
          </Grid2>
        </form>
      </Box>
    </>
  );
};

export default Settings;
