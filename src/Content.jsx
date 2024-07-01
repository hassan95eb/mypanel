import { useContext } from "react";
import { MainBodyContext } from "./context/MainBodyContext";
import { Button } from "react-bootstrap";
import bars from "./assets/image/hamburger-menu-icon.svg";

export default function Content() {
  const { offcanvas, setOffcanvas } = useContext(MainBodyContext);
  const handleShow = () => {
    setOffcanvas(!offcanvas);
  };
  return (
    <div className={`content-main ${!offcanvas ? "open" : ""}`}>
      <Button variant="outline-danger" onClick={handleShow}>
        <img src={bars} className="offcanvas-icon" alt="offcanvas icon" />
      </Button>
    </div>
  );
}
