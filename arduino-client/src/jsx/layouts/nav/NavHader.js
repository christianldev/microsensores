import React, { useState, useContext } from "react";

/// React router dom
import { Link } from "react-router-dom";
//import { ThemeContext } from "../../../context/ThemeContext";
/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";

export function NavMenuToggle() {
   setTimeout(() => {
      let mainwrapper = document.querySelector("#main-wrapper");
      if (mainwrapper.classList.contains('menu-toggle')) {
         mainwrapper.classList.remove("menu-toggle");
      } else {
         mainwrapper.classList.add("menu-toggle");
      }
   }, 200);
}

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
   //   const { openMenuToggle } = useContext(ThemeContext);
   return (
      <div className="nav-header">
         <Link to="/temperatura-humedad" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="" />
            {/*<img className="logo-compact" src={logoText} alt="" />
            <img className="brand-title" src={logoText} alt="" /> */}

            <span className="p-2 dashboard_bar">Ecotec</span>
         </Link>

         <div className="nav-control"
            onClick={() => {
               setToggle(!toggle);
               NavMenuToggle();
            }}
         >
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
