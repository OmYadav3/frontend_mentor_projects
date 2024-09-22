import React from "react";
import HomeImage from "/home-image.jpg";

const MainNews = () => {
  return (
    <div className="section md:w-[60%] flex flex-col md:ml-40 ">
      <div className="sec-A ">
        <img src={HomeImage} alt="not found" />
      </div>
      <div className="sec-B md:my-6  md:flex ">
        <div className="main-heading text-5xl font-bold md:p-4 py-4">
          The Bright Future of Web 3.0?
        </div>
        <div className="main-heading-details ">
          <div className="details text-lg md:h-[60%] md:p-2 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </div>
          <div className="details md:p-3 py-2">
            <button className="readmore py-4 px-6 text-xs bg-red-500 hover:bg-black text-white font-normal">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
