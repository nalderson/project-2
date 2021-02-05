import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar-menu is-fixed-top">
    <div className="navbar-start navbar-brand">
      <a className="navbar-item">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" width="112" height="28" />
      </a>
    </div>

    <div className="navbar-end ">
      <a className="navbar-item">
        <Link to={'/project-2/'}>Search</Link>
      </a>
      <a className="navbar-item">
        <Link to={'/project-2/popular'}>Popular Movies</Link>
      </a>
    </div>
  </div>
}