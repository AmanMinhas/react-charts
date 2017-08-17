import React, { Component } from 'react';

export default class Navbar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeTab: 'Dashboard',
			leftNavList: [
				{ title: 'Dashboard' },
				{ title: 'Edit Time' },
				{ title: 'Screenshots' },
				{ title: 'Reports' },
				{ title: 'Payments' }
			]
		};

		this.changeActiveTab = this.changeActiveTab.bind(this);
	}

	changeActiveTab(activeTab) {
		this.setState({ activeTab });
	}

	render() {
		return (
			<div className='app-navbar'>
				<nav className="navbar navbar-toggleable-md bg-white app-navbar-nav">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav app-navbar-nav-ul">
							{ 	this.state.leftNavList.map((tab, key) => {
									const className = 'nav-item '.concat(tab.title === this.state.activeTab ? 'active' : '');
									return (
										<li className={className} key={key} onClick={() => this.changeActiveTab(tab.title)}>
											<a className="nav-link">{tab.title}</a>
										</li>
									);
								}) 
							}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
