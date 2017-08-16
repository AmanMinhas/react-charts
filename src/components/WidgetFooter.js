import React, { Component } from 'react';

export default class WidgetFooter extends Component {

	render() {
		return (
			<div className="app-widget-footer">
				{this.props.children}
			</div>
		);
	}
}
