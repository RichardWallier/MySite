import React from 'react'
import './Card.css'
import Buttons from './Buttons';

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
