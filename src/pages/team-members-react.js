import React, { useState } from 'react';
import './team-members.css';

const TeamMembers = () => {
    const [active, setActive] = useState("Team Members");

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
            <section className="team">
                <h1>MEET THE TEAM</h1>
                <div className="team-members">
                    <div className="member">
                        <img src="member1.jpg" alt="Darrylene Aranzasu" />
                        <p>Darrylene Aranzasu</p>
                    </div>
                    <div className="member">
                        <img src="member2.jpg" alt="Darryl Aranzasu" />
                        <p>Darryl Aranzasu</p>
                    </div>
                    <div className="member">
                        <img src="member3.jpg" alt="Demrose Gangan" />
                        <p>Demrose Gangan</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamMembers;
