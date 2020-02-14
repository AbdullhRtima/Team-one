import React from 'react'
import Link from './Link'
import './index.css'

const Header = () => {
    const onHandleClick = () => {
        let navItems = document.getElementById("main-nav");
        navItems.classList.toggle('active');
    };
    return (
        <header id="main-header">
            <nav className="top-nav">
                 <span className="nav-toggle" id="js-nav-toggle" onClick={onHandleClick}>
                    <i className="fas fa-bars"></i>
                </span>
                <a href="#" className="nav-logo">LOGO</a>
                <ul className="nav-list" id="main-nav">
                    <Link className="nav-link" children="Home" url="#home"/>
                    <Link className="nav-link" children="Feature" url="#"/>
                    <Link className="nav-link" children="How it work" url="#"/>
                    <Link className="nav-link" children="Pricing" url="#"/>
                    <Link className="nav-link" children="Contact us" url="#"/>
                </ul>
            </nav>
        </header>
    )
};


export default Header
