import { Grid2 } from "@mui/material";
import DataCard from "../DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid2 className={scss.dataRibbon}>
      <Grid2>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The Totals of all DataSoft products in the current financial year"
          }
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The sales of the current financial year"}
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Avg. Order Value"}
          value={"159.30"}
          description={
            "The average order value for all sales in the current financial year"
          }
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"How many pitches became sales"}
        />
      </Grid2>
    </Grid2>
  );
};

export default DataRibbon;
