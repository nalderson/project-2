import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item">
        <Link to={'/'}>Search</Link>
      </a>
      <a className="navbar-item">
        <Link to={'/results'}>Genre</Link>
      </a>
    </div>
  </div>
}