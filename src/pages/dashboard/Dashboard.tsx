import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import TransactionsPerDay from "@/components/Dashboard/TranscationsPerDay/TransactionsPerDay";
import { Box, Grid2 } from "@mui/material";
import scss from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <Box>
      <Grid2 className={scss.gridWrapper}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid2>
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
