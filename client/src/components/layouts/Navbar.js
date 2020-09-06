import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../blog-solid.svg';

const Navbar = () => {
	return (
		<NavbarContainer>
			<nav className="navbar navbar-expand-lg  px-5 py-0">
				<Link className="navbar-brand" to="/">
					<span>blogger</span>
					<img id="logo" src={logo} alt="logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active" />
						<li>
							<Link className="nav-link" to="/add">
								Add Blog
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</NavbarContainer>
	);
};
export default Navbar;
//Main navbar container

const NavbarContainer = styled.div`
	background: #7952b3;
	.nav-link {
		font-size: 20px;
		font-family:  'Courgette',cursive;
			sans-serif;
		color: rgba(255, 255, 255, .75) !important;
		&:hover {
			color: #fff !important;
		}
	}
	span {
		color: #000;
		padding-right: 3px;
		margin-left: 10px;
		font-size: 30px;
		font-family: 'Courgette', cursive;
	}
	#logo {
		width: 24px;
	}
`;
