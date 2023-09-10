import { Link } from "react-scroll";

import logo from "../../assets/images/logo2.png";
import "./styles.css";

const BottomNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar-content">
        <div>
          <img className="bottom-logo" src={logo} alt="logo1" />
        </div>
        <ul className="bottom-links">
          <li className="bottom-link">
            <Link to="history" smooth={true}>
              01. History
            </Link>
          </li>
          <li className="bottom-link">
            <Link to="team" smooth={true}>
              02. Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
