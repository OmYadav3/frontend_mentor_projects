import React, { useEffect, useState } from "react";
import Userprofile from "./components/Userprofile";
import userimage from "/userimage.png";
import icon from "/icon-ellipsis.svg";
import FieldCard from "./components/FieldCard";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("daily");



  const fetchData = async () => {
    try {
      const response = await fetch("/data.json"); // Assuming the file is in the public directory
      const jsonData = await response.json();
      if (jsonData) {
        setData(jsonData);
      }
      // console.log(response, jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row  sm:items-center sm:justify-center lg:m-20 m-4">
      <div className="section-A ">
        <Userprofile
          image={userimage}
          username={"Jeremy Robson"}
          handleIntervalChange={handleIntervalChange}
          selectedInterval={selectedInterval}
        />
      </div>
      <div className="section-B grid sm:grid-cols-2 lg:grid-cols-3 sm:p-4 pt-6 gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <FieldCard
              key={index}
              title={item.title}
              data={item.timeframes[selectedInterval]}
              selectedInterval={selectedInterval}
              icon={icon}
              handleIntervalChange={handleIntervalChange}
             
            />
          ))}

        
      </div>
    </div>
  );
};

export default App;


