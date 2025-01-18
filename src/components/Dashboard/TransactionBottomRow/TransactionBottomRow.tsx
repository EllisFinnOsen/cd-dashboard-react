import Grid2 from "@mui/material/Grid2";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";
import scss from "./TransactionBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid2 container className={scss.bottomRow}>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default TransactionBottomRow;
