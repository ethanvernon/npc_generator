import React, { Component } from 'react';
import './App.css';

export class CopyToClipboard extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let range = document.createRange();
		range.selectNode(document.getElementById('copy-version'));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		console.log("copied");
	}


	render() {
		return (
			<button onClick={this.handleClick}>
				copy to clipboard
			</button>
		);
	}
}