import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainBodyContext } from "./context/MainBodyContext";

export default function App() {
  const [offcanvas, setOffcanvas] = useState(true);
  return (
    <div className="mian-body">
      <MainBodyContext.Provider value={{ offcanvas, setOffcanvas }}>
        <Sidebar />
        <Content />
      </MainBodyContext.Provider>
    </div>
  );
}
