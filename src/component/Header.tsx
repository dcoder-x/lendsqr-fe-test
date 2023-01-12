import React from "react";
import { assets } from "../assets";
import { ReactSVG } from "react-svg";
import "../styles/header.scss";
const Header = ({menuToggle}:{menuToggle:React.MouseEventHandler}) => {
  return (
    <nav className="nav" id="nav">
      <div className="logo">
        <img src={assets.icons.logo} alt="" />
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="search for anything ..."
          name=""
          id=""
        />
        <button className="search-btn">
          <ReactSVG src={assets.icons.search} />
        </button>
      </div>
      <div className="links">
        <div className="link">
          <a href="#">DOCS</a>
        </div>
        <div className="link">
          <ReactSVG width={40} src={assets.icons.bell} />
        </div>

        <div className="link user-account">
          <div className="avatar">
            <img src={assets.icons.avatar} alt="" />
          </div>
          <div className="dropdown">
            <p className="username">
                Ayomikun Faluyi
            </p>
            <ReactSVG src={assets.icons.down}/>
          </div>
        </div>
      </div>
      <img src={assets.icons.menuIcon} className="menu" onClick={menuToggle}/>

    </nav>
  );
};

export default Header;
