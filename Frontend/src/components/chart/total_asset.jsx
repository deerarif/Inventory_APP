import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Total_aset(props) {
  const data = {
    labels: Object.keys(props.Data),
    datasets: [
      {
        data: Object.values(props.Data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.25)",
          "rgba(54, 162, 235, 0.25)",
          "rgba(255, 206, 86, 0.25)",
          "rgba(75, 192, 192, 0.25)",
          "rgba(153, 102, 255, 0.25)",
          "rgba(255, 159, 64, 0.25)",
          "rgba(199, 199, 199, 0.25)",
          "rgba(83, 102, 255, 0.25)",
          "rgba(40, 159, 64, 0.25)",
          "rgba(210, 99, 132, 0.25)",
          "rgba(120, 200, 255, 0.25)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(199, 199, 199)",
          "rgb(83, 102, 255)",
          "rgb(40, 159, 64)",
          "rgb(210, 99, 132)",
          "rgb(120, 200, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
