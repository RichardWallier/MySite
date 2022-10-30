import React from 'react';
import './Bio.css';

const Bio = () => {
	return (
		<div className="Bio">
			<h1>Eu sou Richard Wallier</h1>
			<h4>
				Aluno no{' '}
				<a
					target="_blank"
					href="https://oifuturo.org.br/programas/nave/"
					rel="noreferrer"
				>
					NAVE RIO{' '}
				</a>
				e cadete na{' '}
				<a target="_blank" href="https://42.rio/" rel="noreferrer">
					Ecole42
				</a>
			</h4>
		</div>
	);
};

export default Bio;
