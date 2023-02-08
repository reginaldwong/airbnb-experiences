import React from "react"

const Navbar = () => {
    return (
        <nav>
            <a href="https://github.com/reginaldwong" target="_blank"><img src="src/assets/airbnb-logo.png" alt="airbnb logo" className="nav--logo" /></a>
            <ul className="nav--items">
                <li><a href="/">About</a></li>
                <li><a href="/">Experiences</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;