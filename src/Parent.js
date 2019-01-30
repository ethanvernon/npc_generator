import React, { Component } from 'react';
import { RollTable } from './RollTable';
import { RollButton } from './RollButton';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	default: 0
	    }

		this.generateAll = this.generateAll.bind(this);
	}

	generateAll() {
		let numberOfRolls;
		let roll;
		let allRolls=[];

		for (let i=0;i<RollTable.length;i++) {
			numberOfRolls=RollTable[i].number;

			roll = RollTable[i]['rolls'][Math.floor((Math.random()*numberOfRolls)+1)];
			allRolls.push(roll);
		}

		console.log(allRolls);
	}

	

	render() {

		return (
			<div>
				<RollButton
					handleClick = {this.generateAll}
				/>
			</div>
		);
	}

}