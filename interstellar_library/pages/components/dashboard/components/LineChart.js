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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const backendResponse = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 1,
    July: 0,
    August: 4,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };


  

  // const [orders, setOrders] = useState({});

  // // Function to fetch all books from the API
  // const fetchOrderStats = async () => {
  //   try {
  //     const response = await axios.get("localhost:3000/seller/orders_stats", {
  //       withCredentials: true,
  //     });
  //     const res_orders = response.data;
  //     setOrders(res_orders);
  //     console.info("Orders = " + orders);
  //     console.info("Orders January = " + orders.January);
  //     if (current_Income == null || current_Income == "") {
  //       setOrders("0");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching Yearly order Stats:", error);
  //   }
  // };


  // useEffect(() => {

  //   fetchOrderStats();
  // }, []);







  const labels = Object.keys(backendResponse);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "MAU",
        data: Object.values(backendResponse),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };





  return (
    <TitleCard title={"Monthly Active Users (in K)"}>
      <Line data={data} options={options} />
    </TitleCard>
  );
}

export default LineChart;
