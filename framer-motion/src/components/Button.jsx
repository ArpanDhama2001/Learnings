import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const Button = () => {
  const [isOn, setIsOn] = useState(false);
  const parent = useRef(null);
  return (
    <div className="flex h-[50vh] w-full ">
      <div
        ref={parent}
        className="overflow-hidden right-side w-1/2 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <motion.button
          className="h-20 w-32 bg-white text-black text-lg font-semibold tracking-wider rounded-full shadow-lg shadow-gray-500"
          initial={{ opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ width: 150 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          whileDrag={{}}
          drag
          dragConstraints={parent}
          dragElastic={0.1}
          dragSnapToOrigin
        >
          Tap
        </motion.button>
      </div>

      <div className="left-side w-1/2 flex flex-col gap-2 p-14 justify-center">
        <h1 className="text-6xl text-center mb-6">Button</h1>
        <h2 className="text-4xl mb-4">Gesture Animation</h2>
        <li>
          <code>whileTap</code>
        </li>
        <li>
          <code>whileHover</code>
        </li>
        <li>
          <code>whileInView</code>
        </li>
        <li>
          <code>whileDrag</code>
        </li>
      </div>
    </div>
  );
};

export default Button;
