import { useContext } from "react";
import { MainBodyContext } from "../context/MainBodyContext";
import bars from "../assets/image/hamburger-menu-icon.svg";
import { Button, Dropdown } from "react-bootstrap";
import profileImg from "../assets/image/profile.jpg";

export default function NavbarContent() {
  const { offcanvas, setOffcanvas } = useContext(MainBodyContext);
  const handleShow = () => {
    setOffcanvas(!offcanvas);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-base">
      <div className="container-fluid">
        <div className="col-2 col-lg-1">
          <Button variant="outline-danger" onClick={handleShow}>
            <img src={bars} className="offcanvas-icon" alt="offcanvas icon" />
          </Button>
        </div>
        <div className="col-lg-3">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-9 col-lg-8">
          <div className="d-flex justify-content-end align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                <img
                  src={profileImg}
                  alt="profile admin"
                  className="image-profile me-3"
                />
                User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">My Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}
