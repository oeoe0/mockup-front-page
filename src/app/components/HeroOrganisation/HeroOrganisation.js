import React from 'react'
import "./Heroorganisation.css"
import HeroBtn from '../HeroBtn/HeroBtn'
import image from "../../../resources/images/noiseporn-JNuKyKXLh8U-unsplash.jpg"
import Image from 'next/image'

const HeroOrganisation = () => {
    return (
        <div className='hero-organisation-container'>
            <div className='hero-container'>
                <div className='content-container'>
                    <Image className='image' src={image} />
                </div>
                <div className='text-container'>
                    <h4 className='title'>Organisation</h4>
                    <p className='description'>Wir sind eine kleine Agentur, die Influencer managt und Brands bei Kampagnen unterstützt. Mit kreativen Ideen sorgen wir dafür, dass Influencer und Marken glänzen.</p>
                    <HeroBtn text="Mehr erfahren" />
                </div>

            </div>
        </div>
    )
}

export default HeroOrganisation