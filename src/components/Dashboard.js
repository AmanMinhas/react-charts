import React, { Component } from 'react';
import WidgetCard from './WidgetCard'
import WidgetFooter from './WidgetFooter';
import HorizontalBarChart from './graphs/HorizontalBarChart';
import AppRadialBarChart from './graphs/AppRadialBarChart';
  
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
								<i className="fa fa-plus" aria-hidden="true"></i> Add Widget
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Keyboard & Mouse Activity">
							<div className="app-widget-container">
								<HorizontalBarChart userData={kmaData} />
							</div>
							<WidgetFooter>
								{kmaData.slice(0,3).map((user, key) => {
									const className = key !== 0 ? 'avatar-overlap' : '' ;
									return (
										<img src={user.avatar} key={key} alt="" className={className} />
									);
								})}
								<p className="d-inline-block mb-0 ml-1">+900 more</p>
								<span className="badge app-badge ml-4">LOWEST</span>
							</WidgetFooter>
						</WidgetCard>
					</div>
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Highlight Mobile users">
							<div className="app-widget-container">
								<AppRadialBarChart userData={muData} />
							</div>
							<WidgetFooter>
								{muData.slice(0,2).map((user, key) => {
									const className = key !== 0 ? 'avatar-overlap' : '' ;
									return (
										<img src={user.avatar} key={key} alt="" className={className} />
									);
								})}
								<span className="badge app-badge ml-4">HIGHEST</span>
							</WidgetFooter>
						</WidgetCard>
					</div>
					{/*
					<div className="col-lg-4 col-sm-12 pl-2 pr-2">
						<WidgetCard title="Highlight Mobile users" />
						<WidgetFooter />
					</div>
					*/}
				</div>
			</div>
		);
	}
}
