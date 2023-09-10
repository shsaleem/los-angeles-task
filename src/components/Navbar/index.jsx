import { Link } from "react-scroll";

import "./styles.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo1" />
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="history" smooth={true}>
            01. History
          </Link>
        </li>
        <li className="nav-link">
          <Link to="team" smooth={true}>
            02. Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
