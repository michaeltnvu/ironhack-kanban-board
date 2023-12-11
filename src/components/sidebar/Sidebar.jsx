import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              + Create a new task
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              To-Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              In-Progress
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
