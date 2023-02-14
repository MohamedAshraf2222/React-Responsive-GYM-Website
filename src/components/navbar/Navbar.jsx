import React, { useRef } from "react";
import "./navbar.css";
import logo from "../../assets/dumble.png";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { useState } from "react";
const Navbar = () => {
  const navref = useRef(null);
  const navbarfun = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navref.current.classList.add("sticky-navbar");
    } else {
      navref.current.classList.remove("sticky-navbar");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarfun);
    return () => window.removeEventListener("scroll", navbarfun);
  }, []);
  const [toggleMenu, setToggleMenu] = useState(false);
  const links = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "schedule",
      display: "Schedule",
    },
    {
      path: "classes",
      display: "Classes",
    },
    {
      path: "pricing",
      display: "Pricing",
    },
  ];
  return (
    <div className="gym__navbar" ref={navref}>
      <div className="gym__navbar-logo">
        <div className="gym__navbar-img">
          <img src={logo} alt="logo" />
        </div>
        <h3>FitBody</h3>
      </div>
      <div className="gym__navbar-links">
        <ul>
          <li>
            <Link to={"home"} offset={-100}>
              Home
            </Link>
          </li>
          {links
            .filter((link) => link.path !== "home")
            .map((link) => (
              <>
                <li>
                  <Link to={link.path} offset={30}>
                    {link.display}
                  </Link>
                </li>
              </>
            ))}
        </ul>
      </div>
      <div className="gym__navbar-btn">
        <button className="register-btn">Register</button>

        <div className="togglemenu">
          {toggleMenu ? (
            <i class="ri-close-line" onClick={() => setToggleMenu(false)}></i>
          ) : (
            <i class="ri-menu-line" onClick={() => setToggleMenu(true)}></i>
          )}
          {toggleMenu && (
            <>
              <div className="togglemenu-content scale-up-center">
                <ul>
                  <li>
                    <Link to={"home"} offset={-100}>
                      Home
                    </Link>
                  </li>
                  {links
                    .filter((link) => link.path !== "home")
                    .map((link) => (
                      <>
                        <li>
                          <Link to={link.path} offset={30}>
                            {link.display}
                          </Link>
                        </li>
                      </>
                    ))}
                </ul>
                <button className="register-btn">Register</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
