import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import "../styles/sideBar.scss";
import { assets } from "../assets";
import { sideBarMenu } from "../constants/sidebar";

const SideBar = () => {
  return (
    <main id="sideBar">
      <section className="nav-container">
        <SideBarLink
          name="Switch Organization"
          icon={assets.icons.organizations}
          after={assets.icons.down}
        />
        <div style={{ margin: "2rem 0" }}>
          <SideBarLink name="Dashboard" icon={assets.icons.dashboard} />
        </div>
        {sideBarMenu.map((menu, index) => {
          return (
            <div className="menu-section">
              <p className="title">{menu.title}</p>
              {menu.sublinks.map((link, index) => {
                return <SideBarLink icon={link.icon} name={link.name} link={link.link}/> ;
              })}
            </div>
          );
        })}
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
