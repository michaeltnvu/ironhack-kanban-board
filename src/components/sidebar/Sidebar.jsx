import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/create-task" className="nav-link">
              + Create a new task
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
