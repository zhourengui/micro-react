import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

window.unmount = () => {
  root.unmount();
};
