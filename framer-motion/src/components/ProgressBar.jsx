import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollLvl, setScrollLvl] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollLvl(latest);
    });
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-1 fixed top-0 left-0 right-0 bg-gradient-to-l from-blue-500 to-green-500 origin-left"
      />

      <motion.div className=" fixed top-6 left-6 h-10 w-10 text-white">
        <p>{Math.floor(scrollLvl * 100)}%</p>
      </motion.div>
    </>
  );
};

export default ProgressBar;
