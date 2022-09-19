/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: withOpacity("--color-base"),
        muted: withOpacity("--color-muted"),
        accent: withOpacity("--color-accent"),
        fill: withOpacity("--color-fill"),
        inverted: withOpacity("--color-inverted"),
        "button-fill": withOpacity("--color-button-fill"),
        outline: withOpacity("--color-outline"),
        hover: withOpacity("--color-hover"),
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
        },
      },
    },
  },
  plugins: [],
};
