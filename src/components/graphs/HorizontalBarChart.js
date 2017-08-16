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
			<div className="horizontal-bar-chart">
				{userData.map((user, key) => {
					const barFillWidth = barFullWidth*(user.uv/100);

					return (
						<div className="row app-bar-row" key={key}>
							<div className="col-lg-6 col-sm-12">
								<img src={user.avatar} className="d-inline-block app-bar-avatar"/>
								<p className="m-0 pl-3 d-inline-block">{user.name}</p>
							</div>
							<div className="col-lg-6 col-sm-12 pl-lg-0">
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
		);
	}
}
