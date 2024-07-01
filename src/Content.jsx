import { useContext } from "react";
import NavbarContent from "./NavbarContent/NavbarContent";
import User from "./Users/User";
import { MainBodyContext } from "./context/MainBodyContext";

export default function Content() {
  const { offcanvas } = useContext(MainBodyContext);
  return (
    <div className={`content-main ${!offcanvas ? "open" : ""}`}>
      <NavbarContent />
      <User />
    </div>
  );
}
