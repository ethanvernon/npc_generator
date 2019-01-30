import React, { Component } from 'react';
import { RollTable } from './RollTable';
import { RollButton } from './RollButton';
import { Results } from './Results';
import { Footer } from './Footer';
import { CopyToClipboard } from './CopyToClipboard';
import { HiddenCopy } from './HiddenCopy';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	results: [],
	    	clipboard: [],
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

		this.makeClipboardVer(allRolls);
	}

	makeClipboardVer(arr) {

		let newArr=[];
		let tempStr;

		for (let i=0;i<arr.length;i++) {
			tempStr=<span dangerouslySetInnerHTML={{__html:'<b>'+RollTable[i]['tableName']+"</b>: "+arr[i]+'<br/>'}}/>;
			newArr.push(tempStr);
		}

		console.log(newArr);

		this.setState({
			clipboard: newArr
		});

	}

	

	render() {

		return (
			<div>
				<RollButton
					handleClick = {this.generateAll} />
				<Results 
					results = {this.state.results}/>
				<HiddenCopy
					copiable = {this.state.clipboard}/>
				<CopyToClipboard/>
				<Footer/>
			</div>
		);
	}

}