function App() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-full md:w-[50%] lg:w-[30%] mx-auto">
      <h1 className="text-4xl">Add multiple colors to your life!</h1>
      <h1 className="text-4xl">More colors more joy!</h1>

      <p className="text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
        dignissimos impedit beatae iste tempore quaerat nulla nobis ipsa, modi
        odio ullam laborum repudiandae sed incidunt eos fugit ut, quas repellat.
        Doloremque veniam libero dolorum. Fuga maxime, earum laboriosam possimus
        culpa consectetur, facere quisquam praesentium odio non rerum obcaecati,
        modi alias?
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        <button className="border border-amber-300 hover:bg-amber-300 hover:bg-opacity-100 hover:border-transparent hover:text-[#111] transition-all duration-300 px-6 py-2 w-full md:w-1/2 rounded-lg text-amber-300">
          lorem
        </button>

        <button className="bg-amber-300 border border-transparent hover:bg-transparent hover:border-amber-300 hover:bg-opacity-100 hover:text-white transition-all duration-300 px-6 py-2 rounded-lg w-full md:w-1/2 text-[#111]">
          ipsum
        </button>
      </div>
    </div>
  );
}

export default App;
