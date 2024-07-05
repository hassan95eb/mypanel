import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainBodyContext } from "./context/MainBodyContext";
import { BrowserRouter } from "react-router-dom";
import Signin from "./Auth/Signin";

export default function App() {
  const [offcanvas, setOffcanvas] = useState(true);
  const [isLoggin, setIsLoggin] = useState(false);
  return (
    <div className="mian-body">
      <MainBodyContext.Provider value={{ offcanvas, setOffcanvas }}>
        {isLoggin ? (
          <BrowserRouter>
            <Sidebar />
            <Content />
          </BrowserRouter>
        ) : (
          <Signin />
        )}
      </MainBodyContext.Provider>
    </div>
  );
}
