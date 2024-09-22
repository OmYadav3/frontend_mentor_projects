import React, { useEffect, useState } from "react";
import bgiconwork from "/icon-work.svg";
import bgiconplay from "/icon-play.svg";
import bgiconstudy from "/icon-study.svg";
import bgiconexercise from "/icon-exercise.svg";
import bgiconsocial from "/icon-social.svg";
import bgiconselfcare from "/icon-self-care.svg";

const FieldCard = ({ title, data, selectedInterval, icon, handleIntervalChange }) => {
  
  const [currentHours, setCurrentHours] = useState();
  const [previousHours, setPreviousHours] = useState();


  useEffect(() => {

    setCurrentHours(data.current);
    setPreviousHours(data.previous);

  }, [data])
  

  return (
    <div>
      <div
        className={`sm:w-52  ${title === 'Play' ? 'bg-Softblue' :title === 'Work' ? 'bg-Lightorange' : title === 'Study' ? 'bg-Lightred' : title === 'Exercise' ? 'bg-Limegreen' : title === 'Social' ? 'bg-Violet' : title === 'Self Care' ? 'bg-Softorange' : '' }    bg-no-repeat bg-right-top rounded-xl pt-12 `}

        style={{ backgroundImage: `url('${title === 'Play' ? bgiconplay :title === 'Work' ? bgiconwork : title === 'Study' ? bgiconstudy : title === 'Exercise' ? bgiconexercise : title === 'Social' ?bgiconsocial : title === 'Self Care' ? bgiconselfcare : '' }')` }}
      >
        <div className="main text-white p-6 rounded-xl bg-Darkblue hover:bg-Desaturatedblue">
          <div className="flex justify-between items-center ">
            <div className="sm:text-2xl">{title}</div>
            <div className="">
              <img
                className="h-1 cursor-pointer"
                src={icon}
                alt="not found"
                onClick={() => handleIntervalChange(selectedInterval)}
              />
            </div>
          </div>
          <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-around gap-16 sm:gap-0 ">
          <div className="sm:py-4  text-4xl">{currentHours}hrs</div>
            <div className="text-sm text-PaleBlue">
              Previous - {previousHours}hrs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;
