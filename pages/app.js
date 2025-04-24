const { useState } = React;

function App() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", link: "index.html" },
    { name: "About Us", link: "about us.html" },
    { name: "Team Members", link: "team-members.html" },
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
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);