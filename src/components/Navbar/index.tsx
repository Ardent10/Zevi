import "@styles/navbar.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar-container">
        {location.pathname === "/products" && (
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <img src="/assets/search.svg" className="search-icon" alt="" />
          </div>
        )}
        <div className="logo">
          <Link to={"/"}>
            <img src="/assets/logo.webp" className="logo" alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
