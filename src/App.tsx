import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="flex flex-col items-center">
      <ul className="flex gap-3">
        <li>
          <Link to={`/`}>Tab1</Link>
        </li>
        <li>
          <Link to={`/route`}>Tab2</Link>
        </li>
      </ul>
      <div>{location.pathname}</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
