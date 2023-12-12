import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>
        Find us on{' '}
        <Link to="https://github.com/michaeltnvu/ironhack-kanban-board.git">
          GitHub
        </Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;