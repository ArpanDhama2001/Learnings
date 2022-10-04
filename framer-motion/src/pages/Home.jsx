import React from "react";
import { Button, ProgressBar, Switch } from "../components";

const Home = () => {
  return (
    <>
      <ProgressBar />
      <div>
        <h1 className="text-center my-10 text-6xl">Animated Examples</h1>
      </div>
      <div className="flex flex-col w-[100vw]">
        <Switch />
        <Button />
      </div>
    </>
  );
};

export default Home;
