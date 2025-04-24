import React, { useState } from 'react';
import './about-us.css';

const AboutUs = () => {
    const [active, setActive] = useState("About Us");

    const navItems = [
        { name: "Home", link: "index.html" },
        { name: "About Us", link: "about us.html" },
        { name: "Team Members", link: "team-members.html" },
        { name: "Projects", link: "projects.html" },
        { name: "Contact", link: "contact.html" }
    ];

    return (
        <div>
            <nav className="navbar">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        className={active === item.name ? "active" : ""}
                        onClick={() => setActive(item.name)}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
            <section className="about">
                <h1>About Us</h1>
                <p>Welcome to our company. We are dedicated to providing the best service possible.</p>
            </section>
        </div>
    );
};

export default AboutUs;
