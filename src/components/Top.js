//import React , {useState} from 'react';
import '../styles/top.css'
import Btn from './Btn.js';


function Top(props) {
	let depth = props.depth
	let style = {
		menuList:{
			transform: depth ? 'translateY(-100%)' : '' ,
			opacity: depth ? 0 : 1,
			pointerEvents: depth ? 'none' : ''
		},
		backButton:{
			transform: !depth ? 'translateY(100%)' : '' ,
			opacity: !depth ? 0 : 1,
			pointerEvents: !depth ? 'none' : ''
		}
	}


	return (
		<div className="top">
			<div className="top__logo">YourLogoHere</div>
			<div className="top__menu">
				<ul
					className="top__menu-list"
					style={style.menuList} 
				>
					<li className="top__menu-list-item">
						<Btn
							text='earbuds'
						/>
					</li>
					<li className="top__menu-list-item">
						<Btn
							text='headphones'
						/>
					</li>
					<li className="top__menu-list-item">
						<Btn
							text='accesoiries'
						/>
					</li>
					<li className="top__menu-list-item">
						<Btn
							text='software'
						/>
					</li>
					<li className="top__menu-list-item">
						<Btn
							text='support'
						/>
					</li>
				</ul>
				<span
					className="top__back-button"
					style={style.backButton}
				>
					<Btn
						text='back'
						onClick={props.handleDepthOut}
					/>
				</span>
			</div>
		</div>
	)
}
export default Top