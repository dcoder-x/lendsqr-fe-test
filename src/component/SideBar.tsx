import React from "react";
import { ReactSVG } from "react-svg";
import {Link} from 'react-router-dom'
import '../styles/sideBar.scss'
import { assets } from "../assets";

const SideBar = () => {
  return <main id="sideBar">
    <SideBarLink name="Switch Organization" icon={assets.icons.organization} after={assets.icons.down}/>
  </main>;
};
interface sidebar {
  name: string;
  link?: string;
  icon: string;
  after?:string
}
const SideBarLink = ({ name, link, icon,after }: sidebar) => {
  return (
    <Link to={link||'#'}>
      <div className="side-link">
        <ReactSVG src={icon} />
        <p>{name}</p>
        {
          after?<ReactSVG src={after} />:null
        }
        
      </div>
    </Link>
  );
};
export default SideBar;
