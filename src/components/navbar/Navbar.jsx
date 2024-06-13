import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { links } from '../../data'
import './navbar.scss'
// import './navbar.css'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<nav className={`${showMenu ? 'nav nav-open' : 'nav'}`}>
			<div className="nav__menu">
				<ul className="nav__list">
					{links.map(({ name, icon, path }, index) => {
						return (
							<li className="nav__item" key={index}>
								<NavLink to={path} className="nav__link" onClick={() => setShowMenu(!showMenu)}>
									{icon}
									<h3 className="nav__name">{name}</h3>
								</NavLink>
							</li>
						)
					})}
				</ul>
			</div>
			<button
				type="button"
				className="icon-menu"
				onClick={() => setShowMenu(!showMenu)}
				aria-label="open/close menu">
				<div className="button__inner">
					<span></span>
				</div>
			</button>
		</nav>
	)
}

export default Navbar
