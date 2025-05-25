import { Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { format } from 'date-fns';
import React, { FC } from "react";
import { Habit } from "./index";

type HabitCardProps = {
  habit: Habit;
};

type ColorMapper = Record<
  string,
  'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
>;

const HabitCard: FC<HabitCardProps> = ({ habit }) => {
  const tagColorMapper: ColorMapper = {
    all: 'default',
    health: 'success',
    study: 'primary',
    fitness: 'warning',
    read: 'info',
  };

  return (
    <Grid key={habit.id}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {habit.name}
          </Typography>
          <Chip
            label={habit.tag}
            color={tagColorMapper[habit.tag] || 'default'}
            size="small"
            sx={{ my: 1 }}
          />
          <Typography variant="body2" color="text.secondary">
            Created: {format(new Date(habit.created_at), 'PPP p')}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HabitCard;
