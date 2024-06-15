"use client"
import React, { useEffect, useState } from 'react'
import "./HeroSection.css"
import HeroBtn from '../HeroBtn/HeroBtn'
import image from "../../../resources/images/shamblen-studios-lJt-3NUFng4-unsplash.jpg"
import Image from 'next/image'

const HeroSection = (props) => {
    const [matches, setMatches] = useState(
        false
    )

    const setMatchesInitial = () => {
        setMatches(window.matchMedia("(min-width: 768px)").matches)
    }

    useEffect(() => {
        setMatchesInitial()
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])

    const getTextPos = () => {
        if (!matches) {
            return "center"
        }
        else {
            if (props.textPos === "right") {
                return "left"
            }
            else {
                return "right"
            }
        }
    }

    return (
        <div className='hero-section-container'>
            <div className='hero-container'>
                <div className='text-container'
                    style={{
                        order: props.textPos == "right" ? "0" : "1",
                        textAlign: getTextPos(),
                    }}>
                    <h4 className='title'>{props.title}</h4>
                    <p className='description'>{props.description}</p>
                    <HeroBtn text="Mehr erfahren" />
                </div>
                <div className='content-container'>
                    <Image alt='' className='image' src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection