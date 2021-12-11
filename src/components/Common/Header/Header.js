import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../Assets/headericon.svg"
import LogoBlack from "../../../Assets/Vector.png"
import "./Header.css";

const Header = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <div className="menu-icon">Close</div>
        ) : (
          <div className="menu-icon">Open</div>
        )}
      </div>
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/directors" className={pathname === "/" || pathname === "/directors" ?   "option_link": "option_link2" }>
              Directors
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/work" className={pathname === "/" || pathname === "/directors" ?   "option_link": "option_link2" }>
              Work
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/news" className={pathname === "/" || pathname === "/directors" ?   "option_link": "option_link2" }>
              News
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about" className={pathname === "/" || pathname === "/directors" ?   "option_link": "option_link2" }>
              About
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact" className={pathname === "/" || pathname === "/directors" ?   "option_link": "option_link2" }>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header_logo">
        {
          pathname === "/" || pathname === "/directors"
            ? <img src={Logo} alt="logo" style={{ height: "25px" }} /> :
            <img src={LogoBlack} alt="logo" style={{ height: "25px" }} />}
              
      </div>
    </div>
  );
};

export default Header;
