import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HorizontalBarChart extends Component {

	static propTypes = {
		userData: PropTypes.array.isRequired,
	};

	render() {
		const { userData } = this.props;
		const barFullWidth = 160;
		const barFillColor = '#eb3836'; // in js and not css because it might be useful to update color based on value. eg: green for 80+ values red for < 20.

		return (
			<div className="row ml-0 mr-0 horizontal-bar-chart">
				<div className="col p-0">
					{userData.map((user, key) => {
						const barFillWidth = barFullWidth*(user.uv/100);
						return (
							<div className="row ml-0 mr-0 app-bar-row" key={key}>
								<div className="col-md-6 col-sm-12">
									<img src={user.avatar} alt="" className="d-inline-block app-bar-avatar"/>
									<p className="m-0 pl-3 d-inline-block">{user.name}</p>
								</div>
								<div className="col-md-6 col-sm-12 pl-md-0 app-bar-bar-col">
									<div className="app-bar-full d-inline-block" style={{width: barFullWidth+'px'}}>
										<div className="app-bar-fill" style={{width: barFillWidth+'px', backgroundColor: barFillColor}}>
										</div>
									</div>
									<p className="d-inline-block mb-0 pl-3">
										<strong>{user.uv}%</strong>
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}
