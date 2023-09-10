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
          <a href="/">01. History</a>
        </li>
        <li className="nav-link">
          <a href="/">02. Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
