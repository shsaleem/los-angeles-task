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
            <a href="/">01. History</a>
          </li>
          <li className="bottom-link">
            <a href="/">02. Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
