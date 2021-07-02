import React from 'react';
import '../styles/fullDescription.css';
import Btn from './Btn.js'

function FullDescription(props){

	function createFullDesctiptionContent(props,i,currentIndex){
		return (
			<div 
				className='full-description__box-item'
				hidden={i!==currentIndex}
				key={i}
			>
				<h2>{props.title}</h2>
				<div className='full-description__text-field'>{props.text.map(t=><p>{t}</p>)}</div>
			</div>
		)
	}

	return (
		<div className='full-description'>
			<div className='full-description__box'>
				{props.earbudsData.map((e,i)=>createFullDesctiptionContent(e,i,props.currentIndex))}
			</div>
		</div>
	)
}
export default FullDescription