import react from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header(){
	return(
<>
<header id="masthead" className="site-header">
	 <div className="main-header container">
		<div id="main-navigation" className=" row main-header">
			<div className="site-logo col-sm-1">
				<img src={logo} />
			</div>
			<div className="col-sm-9">
				<nav id="navigation" className="navbar">
					<ul className="nav-menu">
						<li className="nav-menu-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="about-us">
								About Us
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="collections">
								Collections
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="enquiry">
								Enquiry
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="contact-us">
								Contact Us
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="gallery">
								 Gallery
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="manufacturing">
								Manufacturing
							</Link>
						</li>
						<li className="nav-menu-item">
							<Link className="nav-link" to="sustainability">
								Sustainability
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="col-sm-2 header-btn">
				<a className="quote-btn" to="#">
					Get a Quote
				</a>
			</div>	
		</div>
	</div>
</header>
	
	
</>
		)
}

