import React from 'react';
import {render} from 'react-dom';

class Banner extends React.Component{
	render(){
		return (
			<div>
				<p>Hello From the client!</p>
			</div>
		);
	}
}

render(<Banner/>, document.getElementById('app')); 