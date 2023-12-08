import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="logoContainer">
      <img className="logo" src={Logo} />
      <h1 className="title">Kanban Board</h1>
      <div className="aboutUsContainer">
        <Link to={"/about"} className="aboutUsButton">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
