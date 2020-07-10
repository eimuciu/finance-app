import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const BarChartEachItem = ({ expense }) => {
  const data = expense.map(item => ({ name: item.date, expense: item.amount }));

  return (
    <BarChart
      width={285.75}
      height={269}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: -10,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        {/* <Label value="Each expense by date" offset={0} position="insideBottom"/> */}
      </XAxis>
      <YAxis type="number" domain={[0, 500]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="expense" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartEachItem;
