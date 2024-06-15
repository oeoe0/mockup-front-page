"use client"
import React, { useState } from 'react'
import "./NavigationSlide.css"
import Link from 'next/link'

const NavigationSlide = (props) => {

    return (
        <div style={{ width: props.open ? "100vw" : "0vw" }} className='navigation-slide-container'>
            <button onClick={() => props.setOpen(false)} className='close-btn'>
                <i onClick={() => props.setOpen(false)} style={{ fontSize: '1.3rem' }} className="pi pi-times icon"></i>
            </button>
            <div className='nav-container'>
                <h4>Navigation</h4>
                <nav className='nav'>
                    <ul>
                        <li><Link href=''>Home</Link></li>
                        <li><Link href=''>Kontakt</Link></li>
                        <li><Link href=''>Creator</Link></li>
                        <li><Link href=''>About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavigationSlide