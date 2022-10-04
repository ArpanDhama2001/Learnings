import { motion } from "framer-motion";
import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex h-[50vh] w-full">
      <div className="left-side w-1/2 flex flex-col gap-2 p-14 justify-center">
        <h1 className="text-6xl text-center mb-6">Switch</h1>
        <h2 className="text-4xl mb-4">Layout Animation</h2>
        <li>Position-related, such as CSS flex, position or grid</li>
        <li>Size-realtd, such as CSS width or height</li>
        <li>E.g. - Creating a list or rearranging items in list</li>
      </div>
      <div className="right-side w-1/2 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div
          onClick={() => setIsOn(!isOn)}
          className={`switch w-40 h-24 bg-white bg-opacity-30 rounded-full flex ${
            isOn && "justify-end"
          } items-center p-2`}
        >
          <motion.div
            layout={true}
            transition={{ type: "spring", damping: 30, stiffness: 1000 }}
            className="handle h-20 w-20 bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Switch;
