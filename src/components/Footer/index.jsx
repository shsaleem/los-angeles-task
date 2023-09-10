import logo from "../../assets/images/logo2.png";
import "./styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="logo2" className="footer-logo" />
        <p>COPYRIGHT {currentYear}. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
