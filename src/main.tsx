import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { RecoilRoot } from "recoil";
import { MicroAppContextProvider } from "./micro-app/index.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MicroAppContextProvider>
        <App />
      </MicroAppContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);

window.unmount = () => {
  root.unmount();
};
