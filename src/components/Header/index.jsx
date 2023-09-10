import Navbar from "../Navbar";
import BottomNavbar from "../BottomNavbar";
import "./styles.css";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <BottomNavbar />
    </section>
  );
};

export default Header;
