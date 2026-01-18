import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export function Status_Maintenance(props) {
  const data = {
    labels: ["Sudah Maintenance", "Belum Maintenance"],
    datasets: [
      {
        data: props.Data,
        backgroundColor: [
          "rgba(75, 192, 192, 0.25)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: ["rgb(75, 192, 192)", "rgba(216, 126, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
