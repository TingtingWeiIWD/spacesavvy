import "./styles.scss";

import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="brand-name">SpaceSavvy</div>
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
