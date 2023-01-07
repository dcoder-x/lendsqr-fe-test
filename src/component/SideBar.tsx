import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import "../styles/sideBar.scss";
import { assets } from "../assets";

const SideBar = () => {
  return (
    <main id="sideBar">
      <section className="nav-container">
        <SideBarLink
          name="Switch Organization"
          icon={assets.icons.organizations}
          after={assets.icons.down}
        />
        <SideBarLink name="Dashboard" icon={assets.icons.dashboard} />
      </section>
    </main>
  );
};
interface sidebar {
  name: string;
  link?: string;
  icon: string;
  after?: string;
  style?: React.CSSProperties;
}
const SideBarLink = ({ name, link, icon, after, style }: sidebar) => {
  return (
    <Link to={link || "#"}>
      <div className="side-link">
        <img src={icon} />
        <p style={style}>{name}</p>
        {after ? <ReactSVG src={after} /> : null}
      </div>
    </Link>
  );
};
export default SideBar;
