import React from "react"

const Footer = () => {
    return (
        <footer>
            <p className="footer--name"><a href="https://reginaldwong.com" target="_blank">Project by Reginald Wong</a></p>
            <ul className="footer--links">
                <li><a href="https://github.com/reginaldwong/airbnb-experiences" target="_blank"><img src="src/assets/github.svg" alt="" /></a></li>
                <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src="src/assets/linkedin.svg" alt="" /></a></li>
                <li><a href="https://reginaldwong.com" target="_blank"><img src="src/assets/user.svg" alt="" /></a></li>
            </ul>

        </footer>
    )
}

export default Footer;