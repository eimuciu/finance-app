import React from "react";
import common from "../../commonData.json";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { createAndSumEachCategory } from "../../commonFunctions";

const PieColoredCategoryChart = ({ expense }) => {
  var eachCategorySummedUp = createAndSumEachCategory(
    common.expenseCategory,
    expense
  );

  const data = [];

  for (let x in eachCategorySummedUp) {
    if (parseFloat(eachCategorySummedUp[x]) !== 0) {
      data.push({ name: x, value: parseFloat(eachCategorySummedUp[x]) });
    }
  }

  const COLORS = [
    "#33CBFF",
    "#2FE82E",
    "#FFDF40",
    "#E8642E",
    "#E036FF",
    "#D6B3AE",
    "#3FCC74",
    "#CC4188"
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={269} height={285.75}>
      <Pie
        data={data}
        cx={120}
        cy={120}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieColoredCategoryChart;
