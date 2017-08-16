import React, { Component } from 'react';
import WidgetCard from './WidgetCard'
import WidgetFooter from './WidgetFooter';
import HorizontalBarChart from './graphs/HorizontalBarChart';
import { RadialBarChart, RadialBar } from 'recharts';
  
import kmaData from '../data/keyboard-mouse-avtivity-data'
import muData from '../data/mobile-user-data'

export default class Dashboard extends Component {

	render() {
		return (
			<div className="app-dashboard container">
				<div className="row">
					<div className="col">
						<div className="dashboard-title-wrapper">
							<p className="dashboard-title">
								Company Dashboard
							</p>
						</div>
						<div className="float-right">
							<button className="btn btn-secondary app-dashboard--btn">Edit Layout</button>
							<button className="btn btn-6680aa app-dashboard--btn">
								Add Widget
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Keyboard & Mouse Activity">
							<HorizontalBarChart userData={kmaData} />
							<WidgetFooter>
								{kmaData.slice(0,3).map((user, key) => {
									const className = key != 0 ? 'avatar-overlap' : '' ;
									return (
										<img src={user.avatar} key={key} className={className} />
									);
								})}
								<p className="d-inline-block mb-0 ml-1">+900 more</p>
								<span className="badge app-badge ml-4">LOWEST</span>
							</WidgetFooter>
						</WidgetCard>
					</div>
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Highlight Mobile users">
							<div className="row m-0 app-widget-container"> {/* Height css calc 100% - (height head + height foot) */}
								<div className='col-lg-6'>
									{muData.map((user, key) => {
										return (
											<div className="app-radical-bar-chart-legend" key={key}>
												<div className="app-radical-bar-chart-legend--mark-wrapper float-left">
													<div className="app-radical-bar-chart-legend--mark" style={{backgroundColor: user.fill }}></div>
												</div>
												<div className='app-radical-bar-chart-legend--user-data-wrapper pl-4'>
													<p className='mb-0'>{user.name}</p>
													<p className='mb-0'>
														<strong>
															{user.hrs ? user.hrs+'h': ''} {user.mins ? user.mins+'m': ''}
														</strong>
													</p>
												</div>
											</div>
										)
									})}
								</div>
								<div className='col-lg-6 p-0'>
									<div className="radial-bar-chart-wrapper">
										<RadialBarChart
											width={180}
											height={180}
											cx='50%'
											cy='50%'
											innerRadius={58}
											outerRadius={94}
											data={muData.reverse()}
											startAngle={90}
											endAngle={-270}
										>
											<RadialBar barSize={10} cornerRadius='50%' background dataKey="totalMins" />
										</RadialBarChart>
									</div>
								</div>
							</div>
							<WidgetFooter>
								{muData.slice(0,2).map((user, key) => {
									const className = key != 0 ? 'avatar-overlap' : '' ;
									return (
										<img src={user.avatar} key={key} className={className} />
									);
								})}
								<span className="badge app-badge ml-4">HIGHEST</span>
							</WidgetFooter>
						</WidgetCard>
					</div>
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Highlight Mobile users" />
						<WidgetFooter />
					</div>
				</div>
			</div>
		);
	}
}
