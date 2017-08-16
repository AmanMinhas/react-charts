import React, { Component } from 'react';

export default class Navbar extends Component {

	render() {
		return (
			<div className='app-navbar'>
				<nav className="navbar navbar-toggleable-md bg-white app-navbar-nav">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav app-navbar-nav-ul">
							<li className="nav-item active">
								<a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Edit Time</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Screenshots</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Reports</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Payments</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
