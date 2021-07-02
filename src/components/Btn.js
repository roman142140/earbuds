import '../styles/btn.css'

function Btn(props) {
	return (
		<button className='btn' onClick={props.onClick||function(){}}>{props.text}</button>
	)
}
export default Btn