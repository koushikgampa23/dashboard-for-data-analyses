import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import classes from "./CustomerChart.module.css";

Chart.register(ArcElement, Tooltip, Legend, Title);

export const CustomerChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [20, 40, 30],
        backgroundColor: ["#d14ab8", "#5d39cc", "#dde0f2"],
      },
    ],
  };
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.heading}>Customers</span>
        <br />
        <span>Customers that buy products</span>
      </div>
      <div className={classes.doughnut}>
        <Doughnut data={data}/>
      </div>
    </div>
  );
};
