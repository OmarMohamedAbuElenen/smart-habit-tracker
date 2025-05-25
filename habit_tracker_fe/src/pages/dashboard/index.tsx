import React, { useState } from 'react';
import withAuth from "../../components/withAuth";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';

import HabitsPieChart from "../../components/charts/PieChart";
import HabitsLineChart from "../../components/charts/LineChart";
import { useGetHabits } from "../../apis/habits";
import { useGetStreaks } from "../../apis/streak";
import HabitCard from "./card";
import Charts from "./charts";

export type Habit = {
  id: string;
  name: string;
  created_at: string;
  tag: string;
};

export type Streak = {
  tag: string;
  streak: number;
};

const Dashboard: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string | undefined>(undefined);
  const { data: habits, isLoading, isError } = useGetHabits(filterTag);
  const { data: streaks, isLoading: isStreaksLoading } = useGetStreaks();

  if (isLoading || isStreaksLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box mt={4}>
        <Alert severity="error">Failed to fetch habits.</Alert>
      </Box>
    );
  }

  const uniqueTags = ['all', 'health', 'study', 'fitness', 'read'];

  return (
    <>
      <Charts habits={habits} streaks={streaks} />
      <Container sx={{ mb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">My Habits</Typography>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="filter-label">Tag</InputLabel>
            <Select
              labelId="filter-label"
              value={filterTag}
              label="Tag"
              onChange={(e) => setFilterTag(e.target.value || undefined)}
            >
              {uniqueTags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag === 'all' ? 'All Tags' : tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {habits.map((habit: Habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default withAuth(Dashboard);
