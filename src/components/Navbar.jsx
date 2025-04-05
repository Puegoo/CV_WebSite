import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            O mnie
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
            Doświadczenie
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>
            Edukacja
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projekty
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
