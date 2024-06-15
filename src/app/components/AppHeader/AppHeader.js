"use client"
import React, { useState } from 'react'
import "./AppHeader.css"
import Logo from '../Logo/Logo'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import Link from 'next/link'
import NavigationSlide from '../NavigationSlide/NavigationSlide'

const AppHeader = () => {
    const [visible, setVisible] = useState(false);
    const [openNav, setOpenNav] = useState(false)

    return (
        <div className='app-header-container'>
            <NavigationSlide open={openNav} setOpen={setOpenNav} />
            <Link href="" className='insta-btn'>
                <i style={{ fontSize: '1.3rem' }} className="pi pi-instagram"></i>
            </Link>
            <Logo />
            <button className='burger-menu-btn' onClick={() => setOpenNav(true)}>
                <i style={{ fontSize: '1.3rem' }} className="pi pi-bars"></i>
            </button>
        </div >
    )
}

export default AppHeader