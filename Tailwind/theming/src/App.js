import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [theme, setTheme] = useState("");
  return (
    <div
      className={`${theme
        .split(" ")
        .join("-")} relative h-screen w-full bg-skin-fill`}
    >
      <Menu setTheme={setTheme} />
      <div className="mt-6 flex flex-col gap-6 items-center justify-center h-screen w-[90%] md:w-[50%] lg:w-[30%] mx-auto">
        <h1 className="text-4xl text-main">Add colors to your life!</h1>
        <h1 className="text-4xl text-main">More colors more joy!</h1>

        <p className="text-muted">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
          dignissimos impedit beatae iste tempore quaerat nulla nobis ipsa, modi
          odio ullam laborum repudiandae sed incidunt eos fugit ut, quas
          repellat. Doloremque veniam libero dolorum. Fuga maxime, earum
          laboriosam possimus culpa consectetur, facere quisquam praesentium
          odio non rerum obcaecati, modi alias?
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <button className="border border-outline hover:bg-button-fill hover:border-transparent hover:text-inverted transition-all duration-300 px-6 py-2 w-full md:w-1/2 rounded-lg text-inverted">
            lorem
          </button>

          <button className="bg-button-fill border border-transparent hover:bg-hover hover:text-button-fill transition-all duration-300 px-6 py-2 rounded-lg w-full md:w-1/2 text-inverted">
            ipsum
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
