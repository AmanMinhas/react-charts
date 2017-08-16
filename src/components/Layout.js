import React, { Component } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

export default class Layout extends Component {

	render() {
		return (
			<div className='app-layout bg-faded'>
				<Navbar />
				<Dashboard />
			</div>
		);
	}
}
