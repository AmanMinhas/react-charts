import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WidgetHeader from './WidgetHeader';
import WidgetFooter from './WidgetFooter';

export default class WidgetCard extends Component {

	static propTypes = {
        title: PropTypes.string.isRequired,
    };

	render() {
		return (
			<div className="app-widget-card bg-white">
				<WidgetHeader
					title={this.props.title}
				/>
					{this.props.children}
			</div>
		);
	}
}
