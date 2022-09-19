import React from "react";
import { themes } from "./data";

const Menu = ({ setTheme }) => {
  return (
    <section className="pt-6 -mb-[80px] w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-3/4 mx-auto">
        {themes.map((theme, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setTheme(theme);
              }}
              className={`${theme
                .split(" ")
                .join("-")} text-main bg-fill rounded-lg px-10 py-1`}
            >
              {theme}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
