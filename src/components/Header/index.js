import "./styles.scss";

import { NavLink } from "react-router-dom";
export default function Header() {
  // const onClickNavMobile = () => {
  //   console.log("s");
  // };
  return (
    <div className="header-container">
      <div className="header">
        <div className="brand-name">
          <NavLink to="/">SpaceSavvy</NavLink>
        </div>

        <div className="nav-bar">
          {/* <div className="nav-mobile" onClick={onClickNavMobile}>
            <IoMdMenu />
          </div> */}
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
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
    </div>
  );
}
