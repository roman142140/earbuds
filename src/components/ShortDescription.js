import React from 'react';
import '../styles/shortDescription.css';
import Btn from './Btn.js'

function ShortDescription(props){

	function createShortDesctiptionContent(props,i,currentIndex){
		return (
			<div 
				className={'short-description__box-item '+(i==currentIndex?'short-description__box-item--current':'')}
				key={i}
			>
				<h2>{props.title}</h2>
				<p>{props.text}</p>
			</div>
		)
	}

	return (
		<div className='short-description'>
			<div className='short-description__box'>
				{props.earbudsData.map((e,i)=>createShortDesctiptionContent(e,i,props.currentIndex))}
			</div>
			<Btn
				text="Watch More"
				onClick={props.handleDepthIn}
			/>
		</div>
	)
}
export default ShortDescription