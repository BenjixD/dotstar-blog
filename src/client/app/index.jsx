import React from 'react';
import {render} from 'react-dom';

class Banner extends React.Component{
	constructor(){
		super();
		this.state = {
			target:"nav-banner",
		};
	}

	render(){
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={this.state.target} aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
				      <span className="icon-bar"></span>
				      <span className="icon-bar"></span>
				      <span className="icon-bar"></span>
						</button>
					</div>

					<BannerContent target={this.state.target}/>
				</div>
			</nav>
		);
	}
}

function BannerContent(props){
	return(
		<div className="collapse navbar-collapse" id={props.target}>
			<ul className="nav navbar-nav">
				<li><a href="#">Link</a></li>
			</ul>
		</div>
	);
}

render(<Banner/>, document.getElementById('app')); 