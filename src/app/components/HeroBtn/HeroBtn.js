import React from 'react'
import "./HeroBtn.css"

const HeroBtn = (props) => {
    return (
        <a href="#" className="button type--A">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">{props.text}</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
        </a>
    )
}

export default HeroBtn