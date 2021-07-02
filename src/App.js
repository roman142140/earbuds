import React  , {useState} from 'react';
import Top from './components/Top.js';
import ShortDescription from './components/ShortDescription.js';
import ImageGalery from './components/ImageGalery.js';
import FullDescription from './components/FullDescription.js';

import './styles/earbuds.css'

function App(){

	let earbudsList = []
	for (let i=0; i<5; i++) {
		earbudsList.push({
			title: 'EarbudsName'+i,
			shortDescription:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda tempora praesentium quis error possimus deserunt, laudantium id, nisi dolore modi.',
			fullDescription:['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem excepturi iusto accusamus asperiores possimus voluptatibus libero non similique aspernatur repudiandae numquam perspiciatis, quaerat harum eveniet culpa temporibus! Veritatis, delectus! Labore dolor dignissimos consequatur ipsa numquam cupiditate fugiat, dicta quisquam. Dolorem!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis laborum exercitationem asperiores perferendis cum voluptate optio molestias recusandae doloribus! Nam, reprehenderit fugiat architecto qui, atque porro expedita soluta quas et vero accusantium aliquid ad commodi tenetur ipsa, dolore error, aut. Sint et inventore illo id iure natus, vero culpa cum!'],
			images:{
				left:'assets/someBrend/left.png',
				right:'assets/someBrend/right.png'
			}
		})
	}
	let [currentEarbuds,setCurrentEarbuds] = useState(0)

	let [depth,setDepth] = useState(0)
	let [activePage,setActivePage] = useState('earbuds')
	function depthIn(){
		setDepth(depth+1)
	}
	function depthOut(){
		setDepth(depth-1)
	}
	function shortDescriptionData(){
		return earbudsList.map(e=>{
			return {
				title: e.title,
				text: e.shortDescription
			}
		})
	}
	function fullDescriptionData(){
		return earbudsList.map(e=>{
			return {
				title: e.title,
				text: e.fullDescription
			}
		})
	}
	function toPrewEarbuds(){
		setCurrentEarbuds(currentEarbuds-1<=0?0:currentEarbuds-1)
	}
	function toNextEarbuds(){
		setCurrentEarbuds(currentEarbuds+1>=earbudsList.length-1?earbudsList.length-1:currentEarbuds+1)
	}

	return (
		<div className='wrapper'>
			<div className='inner'>
				<Top
					depth={depth}
					handleDepthOut={depthOut}
				/>
				<div
					className={'earbuds '+(depth?'earbuds--more':'')}
					hidden={activePage!=='earbuds'}
				>
					<div
						className="earbuds__short-description"
					>
						<ShortDescription 
							currentIndex={currentEarbuds}
							earbudsData={shortDescriptionData()}
							handleDepthIn={depthIn}
						/>
					</div>
					<div className="earbuds__image-galery">
						<ImageGalery
							depth={depth}
							currentIndex={currentEarbuds}
							earbudsData={earbudsList.map(e=>e.images)}
							handleToPrewEarbuds={toPrewEarbuds}
							handleToNextEarbuds={toNextEarbuds}
						/>
					</div>
					<div className="earbuds__full-description">
						<FullDescription 
							currentIndex={currentEarbuds}
							earbudsData={fullDescriptionData()}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App