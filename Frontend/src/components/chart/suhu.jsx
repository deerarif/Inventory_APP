import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Suhu Server",
    },
  },
};

/** Generate labels Day 1 → Day 31 */
const labels = Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`);

export function Suhu_Chart(props) {
  const data = {
    labels,
    datasets: [
      {
        label: "Suhu Pagi (°C)",
        data: props.Data["Suhu_Pagi"],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
      {
        label: "Suhu Sore (°C)",
        data: props.Data["Suhu_Sore"],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Kelembapan Pagi (%)",
        data: props.Data["Hum_Pagi"],
        borderColor: "rgba(0, 255, 194, 0.54)",
        backgroundColor: "rgba(0, 255, 194, 1)",
        tension: 0.4,
      },
      {
        label: "Kelembapan Sore (%)",
        data: props.Data["Hum_Sore"],
        borderColor: "rgba(252, 252, 0, 0.52)",
        backgroundColor: "rgba(252, 252, 0, 0.8)",
        tension: 0.4,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
