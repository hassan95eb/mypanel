import { useContext } from "react";
import NavbarContent from "./NavbarContent/NavbarContent";
import User from "./Users/User";
import { MainBodyContext } from "./context/MainBodyContext";
import Post from "./posts/Post";
import Products from "./Products/Products";
import { Route, Routes } from "react-router-dom";

export default function Content() {
  const { offcanvas } = useContext(MainBodyContext);
  return (
    <div className={`content-main ${!offcanvas ? "open" : ""}`}>
      <NavbarContent />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
