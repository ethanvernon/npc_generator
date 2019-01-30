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
  				<span className='results-label' key={'results'+i}>{RollTable[i].tableName}:</span><br/>
  				<div className='results-data' key={'results-data'+i}>
					<span className='vertical'>{this.props.results[i]}</span>
				</div>
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