import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WidgetHeader extends Component {

	static propTypes = {
        title: PropTypes.string.isRequired,
    };

	render() {
				// <p className="mb-0">{this.props.title}</p>
				// <a className="navbar-brand" href="#">{this.props.title}</a>
		return (
			<nav className="navbar navbar-light app-widget-header">
				{/*
				<div className="navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">{this.props.title}</a>
						</li>
					</ul>
				</div>
				*/}
				<div className="navbar-collapse d-inline-flex">
		            <ul className="navbar-nav mr-auto">
		                <li className="nav-item">
							<a className="nav-link" href="#">{this.props.title}</a>
		                </li>
		            </ul>
		            <ul className="nav navbar-toggler-right mb-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Weekly</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="#">Daily</a>
								<a className="dropdown-item" href="#">Weekly</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
								<i className="icon icon-settings"></i>
							</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="#">Edit Widget</a>
								<a className="dropdown-item" href="#">Delete Widget</a>
							</div>
						</li>
		            </ul>
		        </div>
			</nav>
		);
	}
}
