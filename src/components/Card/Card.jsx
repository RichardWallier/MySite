import React from 'react'
import Buttons from '../Buttons/Buttons';
import './Card.css'

const Card = (props) => {
	return (
		<div className='Card'>
			<div className='Bio'>
				{props.children}
			</div>
			<Buttons />
		</div>
	)
}

export default Card;
