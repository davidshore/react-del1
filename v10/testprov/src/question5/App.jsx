// 5. Navbar 3p
// Skapa en navbar med titeln "Company name" längst till vänster och
// Länkarna Home, Blog, About och Contact. längst till höger.
// Vid mobil-vy ska länkarna gömmas och istället visas en hamburger-meny-knapp.
// När man klickar på knappen ska menyn med länkarna visas i
// en kolumn efter varandra vertikalt.
// När man klickar igen ska länkarna gömmas.

import { useState } from "react";
import "./App.css";

function Links() {
  return (
    <>
      <a>Home</a>
      <a>Blog</a>
      <a>About</a>
      <a>Contact</a>
    </>
  );
}

function App() {
  const [mobileMenyShow, setMobileMenuShow] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="logo">Company name</div>
        <div className="rightPart">
          <div className="links">
            <Links />
          </div>
          <button
            onClick={() => setMobileMenuShow(!mobileMenyShow)}
            className="hamburger"
          >
            ☰
          </button>
        </div>
      </nav>
      {mobileMenyShow && (
        <div className="mobileLinks">
          <Links />
        </div>
      )}
    </div>
  );
}

export default App;
