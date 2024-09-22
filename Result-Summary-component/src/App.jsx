import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchdata();
    console.log("hello world!");
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      if (jsonData) {
        setData(jsonData);
      }
      console.log(jsonData);
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  };

  return (
    <div className="w-screen h-screen md:flex justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="main border-black  flex sm:flex-row flex-col justify-center item-center bg-white rounded-2xl ">
        <div className="section-left sm:w-[20rem] h-[25rem] sm:rounded-3xl rounded-x-3xl flex flex-col items-center p-2 gap-4  bg-gradient-to-b from-Lightslateblue to-Cobaltblue text-White">
          <div className="text-lg text-Lightlavender">Your Result</div>
          <div className="rounded-[80%] mt-6 p-8 bg-gradient-to-b from-Violetblue via-Violetblue too-Lightlavender w-[9rem] text-center">
            <div className="text-5xl ">76</div>
            <div className="text-lg text-Lightlavender">of 100</div>
          </div>
          <div className="text-3xl m-2">Great</div>
          <div className="text-sm mx-12 text-center text-Lightlavender">
            Your scored higher than 65% of the people who have taken these tests
          </div>
        </div>

        <div className="section-right mx-6 sm:w-[20rem]  border-black sm:flex flex-col p-4 rounded-lg gap-2 ">
          <div className="text-xl ml-1 font-semibold">Summary</div>
          <div className="">
            <div className="Reaction  rounded-lg  ">
              {data.map((item, index) => {
                const cat = item.category;
                // let color ;
                // switch (cat) {
                //   case "Reaction": 
                //   color = "red";
                //     break;
                //   case "Memory": 
                //   color = "yellow";
                //     break;
                //   case "Verbal": 
                //   color = "green";
                //     break;
                //   case "Visual": 
                //   color = "blue";
                //     break;
                
                //   default:
                //     break;
                // }
                return (
                  <div key={index} className={`hover:scale-105 ${cat == 'Reaction'? 'bg-rose-100':cat == 'Memory'? 'bg-yellow-50':cat == 'Verbal'? 'bg-green-100':'bg-violet-100'}  rounded-lg p-4 flex items-center justify-between  my-2`}>
                    <div className="iconandreaction flex items-center">
                      <div className="logo min-w-10 max-w-10">
                        <img src={item.icon} alt="not found" />
                        {/* <img src="" alt="not found" /> */}
                      </div>
                      <div className={`${cat == 'Reaction'? 'text-Lightred':cat == 'Memory'? 'text-Orangeyellow':cat == 'Verbal'? 'text-Greenteal':'text-Violetblue'}`}>
                        <b>{item.category}</b> </div>
                    </div>
                    <div className="score"><b>{item.score}</b>/100</div>
                  </div>
                );
              })}
              <img src="" alt="" />
          <div className="mt-3 ">
            <button className="hover:bg-gradient-to-b from-Lightslateblue to-Cobaltblue hover:scale-110 w-full py-2 bg-Darkgrayblue border-2  bg-Darkgrayblue text-white rounded-full ">
              Continue
            </button>
          </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
