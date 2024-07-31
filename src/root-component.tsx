import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

interface RootComponentProps {
  basename: string;
}

const RootComponent: React.FC<RootComponentProps> = ({ basename }) => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/route" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootComponent;
