import React, { Component } from 'react';
import { RollTable } from './RollTable';
import { RollButton } from './RollButton';
import { Results } from './Results';
import { Footer } from './Footer';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	results: [],
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

		this.setState({
			results: allRolls
		})
	}

	

	render() {

		return (
			<div>
				<RollButton
					handleClick = {this.generateAll} />
				<Results 
					results = {this.state.results}/>
				<Footer/>
			</div>
		);
	}

}