import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WidgetHeader extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			activityPeriod: 'Weekly'
		};

		this.changeActivityPeriod = this.changeActivityPeriod.bind(this);
	}

	changeActivityPeriod(activityPeriod) {
		this.setState({activityPeriod});
	}

	render() {
		return (
			<nav className="navbar navbar-light app-widget-header">
				<div className="navbar-collapse d-inline-flex">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link widget-header-title">{this.props.title}</a>
						</li>
					</ul>
					<ul className="nav navbar-toggler-right mb-0">
						<li className="nav-item dropdown widget-activity-period-wrapper">
							<a className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
								{this.state.activityPeriod} <i className="fa fa-chevron-down" aria-hidden="true"></i>
							</a>
							<div className="dropdown-menu widget-dropdown-menu">
								<a className="dropdown-item"
									onClick={() => this.changeActivityPeriod('Daily')}
								>
									Daily
								</a>
								<a className="dropdown-item"
									onClick={() => this.changeActivityPeriod('Weekly')}
								>
									Weekly
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link p-0" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
								<i className="icon icon-settings"></i>
							</a>
							<div className="dropdown-menu widget-dropdown-menu">
								<a className="dropdown-item">Edit Widget</a>
								<a className="dropdown-item">Delete Widget</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
