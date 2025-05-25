import React, { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Habit } from "../../../pages/dashboard";

type LineDataItem = {
  date: string;
  habitsCount: number;
};

const aggregateByDate = (habits: Habit[]): LineDataItem[] => {
  const counts: Record<string, number> = {};
  habits.forEach(({ created_at }) => {
    const date = created_at.split('T')[0];
    counts[date] = (counts[date] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([date, habitsCount]) => ({ date, habitsCount }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

const HabitsLineChart: FC<{ habits: Habit[] }> = ({ habits }) => {
  const data = aggregateByDate(habits);

  return (
    <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="habitsCount" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default HabitsLineChart;
