import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { globalDataState } from "./stores";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";
import { useMicroApp } from "./hooks";

function App() {
  const [count, setCount] = useState(0);
  const globalData = useRecoilValue(globalDataState);
  const { forceDispatch } = useMicroApp();

  return (
    <div className="flex flex-col items-center">
      <div>MicroAppCommunication: {JSON.stringify(globalData, null, 2)}</div>

      <button
        onClick={() =>
          forceDispatch({
            payload: { random: Math.random() },
            channel: MicroAppCommunicationChannel.REACT_MAIN_CHANNEL1,
          })
        }
      >
        向主应用发送数据
      </button>
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
