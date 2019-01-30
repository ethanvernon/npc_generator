import React, { Component } from 'react';
import './App.css';

export class HiddenCopy extends Component {
  	/*constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}*/


	render() {
		return (
			<div className='hidden-text-area' id="copy-version">
				{this.props.copiable}
			</div>
		);
	}
}