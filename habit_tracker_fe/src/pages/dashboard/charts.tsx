import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import React, { FC } from "react";
import {Streak, Habit} from "./index";
import HabitsPieChart from "../../components/charts/PieChart";
import HabitsLineChart from "../../components/charts/LineChart";

type ChartsProps = {
  habits: Habit[];
  streaks: Streak[];
};

const Charts: FC<ChartsProps> = ({ habits, streaks }) => {

  return (
     <Container sx={{ mt: 4, mb: 4 }}>
        {streaks.length > 0 && (
          <Box mt={2} mb={4}>
            {streaks.map((streak: Streak) => (
              <Typography key={streak.tag} variant="body2" gutterBottom>
                🔥 You are on fire! You have maintained <strong>{streak.tag}</strong> for <strong>{streak.streak}</strong> days.
              </Typography>
            ))}
          </Box>
        )}

        <Grid container spacing={4}>
          <Grid display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ p: 2, width: '100%', maxWidth: 500 }}>
              <HabitsPieChart habits={habits} />
            </Paper>
          </Grid>

          <Grid display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ p: 2, width: '100%', maxWidth: 500 }}>
              <HabitsLineChart habits={habits} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Charts;
