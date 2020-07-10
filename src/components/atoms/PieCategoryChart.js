import React from "react";
import common from "../../commonData.json";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { createAndSumEachCategory } from "../../commonFunctions";

const PieCategoryChart = ({ expense }) => {
  var eachCategorySummedUp = createAndSumEachCategory(
    common.expenseCategory,
    expense
  );

  const data01 = [];

  for (let x in eachCategorySummedUp) {
    if (parseFloat(eachCategorySummedUp[x]) !== 0) {
      data01.push({ name: x, value: parseFloat(eachCategorySummedUp[x]) });
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

  return (
    <PieChart width={269} height={285.75}>
      <Pie
        label
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={120}
        cy={120}
        outerRadius={85}
        fill="#8884d8"
      >
        {data01.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieCategoryChart;
