import React from 'react';
import '../styles/imageGalery.css';
import Btn from './Btn.js'

function ImageGalery(props){

	console.log(props.depth);

	function createImagesContent(props,i,currentIndex,depth){
		return (
			<div 
				className={'image-galery__item '+ (i===currentIndex?'image-galery__item--current':depth===1?'image-galery__item--hidden':'')}
				key={i}
			>
				<img src={'./'+props.left}/>
				<img src={'./'+props.right}/>
			</div>
		)
	}

	return (
		<div className='image-galery'>
			<div className='image-galery__list'>
				{
					props.earbudsData.map((e,i)=>createImagesContent(e,i,props.currentIndex,props.depth))
				}
			</div>
			<div className='control'>
				<div 
					className='control__prew'
					onClick={props.handleToPrewEarbuds}
				></div>
				<div 
					className='control__next'
					onClick={props.handleToNextEarbuds}
				></div>
			</div>
		</div>
	)
}
export default ImageGalery