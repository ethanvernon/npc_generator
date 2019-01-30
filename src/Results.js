import React, { Component } from 'react';
import './App.css';
import { RollTable } from './RollTable';

export class Results extends Component {
  	/*constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}*/

	//calls Parent.js' goBack function which updates state to hide this page and show previous one
	makeDiv(i) {
		return(
  			<div key={RollTable[i].tableName}>
  				{RollTable[i].tableName}: {this.props.results[i]}
			</div>
  		)
	}


	render() {

		let results=[];

		for (let i=0;i<RollTable.length;i++) {
			results.push(this.makeDiv(i));
		}



		return (
			<div className='results'>
				{results}
			</div>
		);
	}
}