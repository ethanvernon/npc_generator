import React, { Component } from 'react';
import './App.css';

export class RollButton extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick();
	}


	render() {

		return (
			<button onClick={this.handleClick}>
				Generate
			</button>
		);
	}
}