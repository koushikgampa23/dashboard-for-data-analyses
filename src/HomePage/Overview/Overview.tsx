import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from "./Overview.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Overview = () => {
  const dataObj = {
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Montly Earings",
          data: [8, 6, 10, 8.5, 9, 4, 9, 10, 9.5, 9.2, 8, 7.5, 7, 7.5],
          backgroundColor: "#dde0f2",
        },
      ],
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <span className={classes.heading}>Overview</span>
        <select className={classes.inputStyle}>
          <option>Quarterly</option>
        </select>
      </div>
      <div className={classes.barContainer}>
        <Bar
          data={dataObj.data}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
