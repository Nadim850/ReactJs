import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  let changeColor = () => {
    setColor(color);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 bg-red-500 text-white rounded-full shadow-lg "
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 bg-green-500 text-white rounded-full shadow-lg "
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 bg-blue-500 text-white rounded-full shadow-lg "
          >
            blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 bg-purple-700 text-white rounded-full shadow-lg "
          >
            purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 bg-yellow-400 text-white rounded-full shadow-sm "
          >
            yellow
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 bg-orange-400 text-white rounded-full shadow-lg "
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
