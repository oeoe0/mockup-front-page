import React from 'react'
import "./HeroAbout.css"
import HeroBtn from '../HeroBtn/HeroBtn'
import image from "../../../resources/images/shamblen-studios-lJt-3NUFng4-unsplash.jpg"
import Image from 'next/image'

const HeroAbout = () => {
    return (
        <div className='hero-about-container'>
            <div className='hero-container'>
                <div className='text-container'>
                    <h4 className='title'>Über uns</h4>
                    <p className='description'>Wir sind eine kleine Agentur, die Influencer managt und Brands bei Kampagnen unterstützt. Mit kreativen Ideen sorgen wir dafür, dass Influencer und Marken glänzen.</p>
                    <HeroBtn text="Mehr erfahren" />
                </div>
                <div className='content-container'>
                    <Image className='image' src={image} />
                </div>
            </div>
        </div>
    )
}

export default HeroAbout