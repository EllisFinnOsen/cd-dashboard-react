import React from 'react';
import {Box, Grid2, Paper} from "@mui/material";
import scss from './dashboard.module.scss'

const Dashboard = () => {
    return (
        <Box>
            <Grid2 container gap={2} className={scss.topCardsContainer}>
                <Grid2>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid2>
                <Grid2>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid2>
                <Grid2>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid2>
            </Grid2>
            <Grid2 xs={12} marginY={2}>
                    <Paper className={scss.dataCard}>xs=8</Paper>
            </Grid2>
        </Box>

        
    )
}

export default Dashboard;