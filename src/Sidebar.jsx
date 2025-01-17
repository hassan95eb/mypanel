import { useContext } from "react";
import closeBtn from "./assets/image/cross-icon.svg";
import profileImg from "./assets/image/profile.jpg";
// import homeIcon from "./assets/image/home-button-icon.svg";
import { MainBodyContext } from "./context/MainBodyContext";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const { offcanvas, setOffcanvas } = useContext(MainBodyContext);
  const handleShow = () => {
    setOffcanvas(!offcanvas);
  };
  return (
    <div className={`sidebar-main ${offcanvas ? "open" : ""}`}>
      <div className="container">
        <div className="d-flex flex-column">
          <div className="panel-logo py-4 d-flex align-items-center justify-content-start ">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              fill="#EB181F"
              width="60px"
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 76.5"
            >
              <title>embed-code</title>
              <path d="M47.53,61.26l.15.15a8.91,8.91,0,0,1-.18,12.46s-.11.13-.16.16a8.91,8.91,0,0,1-12.42-.1c-9.66-8.86-23.59-20-32.1-29.25a8.92,8.92,0,0,1,.11-13.12c5.41-6.71,24.44-22.15,32-29A8.93,8.93,0,0,1,49.12,13a1.66,1.66,0,0,1-.44.56l-27,24.78c4.32,4.19,8.09,7.31,11.86,10.43a172.63,172.63,0,0,1,14,12.48Zm27.82,0-.15.15a8.91,8.91,0,0,0,.18,12.46s.11.13.16.16A8.91,8.91,0,0,0,88,73.93c9.66-8.86,23.59-20,32.1-29.25A8.92,8.92,0,0,0,120,31.56c-5.41-6.71-24.44-22.15-32-29A8.93,8.93,0,0,0,73.76,13a1.77,1.77,0,0,0,.43.56l27,24.78c-4.32,4.19-8.1,7.31-11.86,10.43a172.63,172.63,0,0,0-14,12.48Z" />
            </svg>
            <h1 className="panel-name fs-4 panel-p">My Panel</h1>
          </div>
          <div className="profile-panel my-3 d-flex align-items-center justify-content-start ">
            <img
              src={profileImg}
              alt="profile admin"
              className="image-profile me-3"
            />
            <div className="d-flex flex-column justify-content-start user-sidebar-section ">
              <h2 className="user-sidebar fs-5 text-white">Hassan Amini</h2>
              <h5 className="user-status-sidebar fs-6 ">Admin</h5>
            </div>
          </div>
          <div className="menu-sidebar">
            <ul className="navbar-sidebar">
              <a href="#" className="navLink">
                <li className="navitem">Home</li>
              </a>
              <Link to="/user" className="navLink">
                <li className="navitem">Users</li>
              </Link>
              <Link to="/post" className="navLink">
                <li className="navitem">Posts</li>
              </Link>
              <Link to="/products" className="navLink">
                <li className="navitem">Products</li>
              </Link>
            </ul>
          </div>
          <button
            onClick={handleShow}
            className="close-offcanvas d-block d-lg-none"
          >
            <img src={closeBtn} width="30px" />
          </button>
        </div>
      </div>
    </div>
  );
}
