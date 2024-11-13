import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <h1 className="text-3xl font-bold underline text-blue-900">
        Hello, Tailwind with Vite!
      </h1>
    </div>
  );
}

export default App;
