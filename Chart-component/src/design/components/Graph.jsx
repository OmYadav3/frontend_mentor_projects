import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto"; // Importing Chart from 'chart.js/auto'

const Graph = () => {
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setGraphData(jsonData);
      } catch (e) {
        console.error(err, "Error fetching data");
      }
    };

    fetchData();
  }, []);

  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Reference to the chart instance

  useEffect(() => {
    if (!graphData) return;
    if (chartInstance.current) {
      // If chart instance already exists, destroy it before creating a new one
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    console.log(graphData.map((item) => item.day));
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: graphData.map((item) => item.day),
        datasets: [
          {
            label: "$",
            data: graphData.map((item) => item.amount),
            // Sample data, you can replace it with your own
            backgroundColor: graphData.map((item) =>
              item.day ===
              new Date()
                .toLocaleDateString("en-US", { weekday: "short" })
                .toLowerCase()
                ? "hsl(186, 34%, 60%)"
                : "hsl(10, 79%, 65%)"
            ),
            borderColor: ["red"],
            borderRadius: 5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    return () => {
      // Cleanup function to destroy the chart instance when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [graphData]);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="container xs:w-[22rem] border-black rounded-lg ">
        <div className="top-container m-2 my-4 xs:px-6 xs:py-4 p-2 flex justify-between items-center  bg-Softred text-white rounded-lg ">
          <div className="balance flex flex-col">
            <div className="text-sm opacity-70">My balance</div>
            <div className="text-3xl font-[700]">$921.48</div>
          </div>
          <div className="circles">
            <img src="/logo.svg" alt="not found" />
          </div>
        </div>
        <div className="bottom-container m-2 xs:p-6 p-2 flex flex-col items-center jsutify-center bg-Verypaleorange rounded-lg">
          <div className="graphtime w-full  xs:text-2xl text-xl font-[700] ">
            Spending - last 7 days
          </div>
          <div className="w-[13rem] xs:w-[20rem]">
            <canvas ref={chartRef} className="overflow"></canvas>
          </div>
          <hr className=" w-full my-4 h-1 bg-gray-500 border-2 " />
          <div className="revenue w-full flex justify-between items-center ">
            <div className="month-revenue">
              <div className="thismonth text-sm opacity-70">
                Total this month
              </div>
              <div className="money xs:text-4xl text-2xl font-[700]">
                $478.33
              </div>
            </div>
            <div className="percent">
              <div className="profit-lose font-[700]">+2.4%</div>
              <div className="thismonth text-sm opacity-70">
                from last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
