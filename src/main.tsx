import RootComponent from "./root-component.tsx";
import { createRoot } from "react-dom/client";
import { reactBridge } from "@garfish/bridge-react-v18";

import "./index.css";

export const provider = reactBridge({
  el: "#root",
  rootComponent: RootComponent,
  errorBoundary: () => <>micro-react error</>,
});

if (!window.__GARFISH__) {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(<RootComponent basename={"/"} />);
}
