import React from 'react';
import './Title.css';

const Description = (props) => {
	return (
		<div className="Title">
			<h1>{props.content}</h1>
		</div>
	);
};

export default Description;