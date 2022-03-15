import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"


export const NavBar = ({ token, setToken }) => {
	const history = useHistory()
	const navbar = useRef()
	const hamburger = useRef()

	const showMobileNavbar = () => {
		hamburger.current.classList.toggle("is-active")
		navbar.current.classList.toggle("is-active")
	}

	return (
		<nav
			className='navbar is-success mb-3'
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='/'>
				
				
				</a>

				<a
					role='button'
					className='navbar-burger'
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'
					onClick={showMobileNavbar}
					ref={hamburger}>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>

			<div className='navbar-menu' ref={navbar}></div>
				<div className='navbar-start'>
					{token ? (
						<>
							<Link to='/CreateScrapbook' className='navbar-item'>
								Create A Scrapbook!
							</Link>
							<Link to='/MyBooks' className='navbar-item'>
								Your Books!
							</Link>
							<Link to='/uploadImages' className='navbar-item'>
								Upload Photos!
							</Link>
							<Link to='/scrapbookFeed' className='navbar-item'>
								Hitchike!
							</Link>
						
						
						</>
					) : (
						""
					)}
				</div>

				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='buttons'>
							{token ? (
								<button
									className='button is-outlined'
									onClick={() => {
										setToken("")
										history.push("/login")
									}}>
									Logout
								</button>
							) : (
								<>
									<Link
										to='/register'
										className='button is-link'>
										Register  
									</Link>
									<Link
										to='/login'
										className='button is-outlined'>
										Login
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
		
		</nav>
	)
}
