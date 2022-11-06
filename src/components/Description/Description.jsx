import React from 'react';
import './Description.css';

const Description = (props) => {
	return (
		<div className="Description">
			<h4>{props.content}</h4>
		</div>
	);
};

export default Description;
