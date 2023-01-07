import React from "react";
import { ReactSVG } from "react-svg";
import {Link} from 'react-router-dom'

const SideBar = () => {
  return <main id="sideBar"></main>;
};
interface sidebar {
  name: string;
  link: "#";
  icon: string;
}
const SideBarLink = ({ name, link, icon }: sidebar) => {
  return (
    <Link to={link}>
      <div className="side-link">
        <ReactSVG src={icon} />
        <p>{name}</p>
      </div>
    </Link>
  );
};
export default SideBar;
