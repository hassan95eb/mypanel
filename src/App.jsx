import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainBodyContext } from "./context/MainBodyContext";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [offcanvas, setOffcanvas] = useState(true);
  return (
    <div className="mian-body">
      <MainBodyContext.Provider value={{ offcanvas, setOffcanvas }}>
        <BrowserRouter>
          <Sidebar />
          <Content />
        </BrowserRouter>
      </MainBodyContext.Provider>
    </div>
  );
}
