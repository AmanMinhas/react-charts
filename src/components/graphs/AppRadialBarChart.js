import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar } from 'recharts';

export default class AppRadialBarChart extends Component {

	static propTypes = {
		userData: PropTypes.array.isRequired,
	};

	render() {
		const { userData } = this.props;
		return (
			<div className="row ml-0 mr-0 app-radial-bar-chart"> {/* Height css calc 100% - (height head + height foot) */}
				<div className='col-md-6'>
					{userData.map((user, key) => {
						return (
							<div className="app-radial-bar-chart-legend" key={key}>
								<div className="app-radial-bar-chart-legend--mark-wrapper float-left">
									<div className="app-radial-bar-chart-legend--mark" style={{backgroundColor: user.fill }}></div>
								</div>
								<div className='app-radial-bar-chart-legend--user-data-wrapper'>
									<p className='mb-0 app-radial-bar-chart-legend--user-name'>{user.name}</p>
									<p className='mb-0 app-radial-bar-chart-legend--user-stat'>
											{user.hrs ? user.hrs+'h': ''} {user.mins ? user.mins+'m': ''}
									</p>
								</div>
							</div>
						)
					})}
				</div>
				<div className='col-md-6 p-0'>
					<div className="radial-bar-chart-wrapper float-md-right">
						<RadialBarChart
							width={180}
							height={180}
							cx='50%'
							cy='50%'
							innerRadius={58}
							outerRadius={94}
							data={userData.reverse()}
							startAngle={90}
							endAngle={-270}
						>
							<RadialBar barSize={10} cornerRadius='50%' background dataKey="totalMins" />
						</RadialBarChart>
					</div>
				</div>
			</div>
		);
	}
}
