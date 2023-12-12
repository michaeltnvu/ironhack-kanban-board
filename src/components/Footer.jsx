import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"https://github.com/michaeltnvu/ironhack-kanban-board.git"}>
            GitHub Repository
          </Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
