import React from 'react'
import { ReactSVG } from "react-svg";
import '../styles/cards.scss'
import CountUp from 'react-countup';

interface UserInfoCardsProps {
    icon:string,
    description:string,
    value:string,
    style?:React.CSSProperties,
    className?:string
}

export const UserInfoCards = ({icon,description,value,style,className}:UserInfoCardsProps) => {
  return (
    <div id='usercard' style={style} className={`user-info ${className}`}>
        <ReactSVG  src={icon}/>
        <p className="desc">
            {description}
        </p>
        <p className="value">
            <CountUp end={parseInt(value)} duration={3} delay={.2}/>
        </p>
    </div>
  )
}

