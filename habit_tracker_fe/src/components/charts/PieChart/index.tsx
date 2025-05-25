import React, { FC } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import {Habit} from "../../../pages/dashboard";


type PieDataItem = {
  name: string;
  value: number;
};

interface HabitsPieChartProps {
  habits: Habit[];
}

const aggregateByTag = (habits: Habit[] ): PieDataItem[] => {
  const counts: Record<string, number> = {};
  habits.forEach(({ tag }) => {
    counts[tag] = (counts[tag] || 0) + 1;
  });
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
};



const colors = ['#9e9e9e', '#4caf50', '#1976d2', '#ed6c02', '#0288d1'];

const HabitsPieChart: FC<HabitsPieChartProps> = ({ habits }) => {
    const data: PieDataItem[] = aggregateByTag(habits);
   return (
        <PieChart width={500} height={300}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name}: ${(percent! * 100).toFixed(0)}%`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                ))}
            </Pie>
            <Tooltip/>
            <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
    );
}

export default HabitsPieChart;
