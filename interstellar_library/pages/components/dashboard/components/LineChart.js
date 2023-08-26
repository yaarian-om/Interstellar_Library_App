import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart() {
  const [backendResponse, setBackendResponse] = useState({});

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("http://localhost:3000/seller/orders_stats", {
        withCredentials: true,
      })
      .then((response) => {
        setBackendResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  console.info("Total Cost on June = " + backendResponse.June);

  const labels = Object.keys(backendResponse);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Orders in Month",
        data: Object.values(backendResponse),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <TitleCard title={"Monthly Order Stats"}>
      <Line data={data} options={options} />
    </TitleCard>
  );
}

export default LineChart;
