import React from 'react';
import Description from './components/Description/Description';
import Card from './components/Card/Card';
import Bio from './components/Bio/Bio';
import Title from './components/Title/Title';
import './App.css';

const Home = () => {
	return (
		<div className="App">
			<div className="Content">
				<Card>
					<Bio />
				</Card>
				<img
					className="Image"
					src="https://uploaddeimagens.com.br/images/004/035/989/full/220603661_4185033074945160_8642337274106015430_n_%281%29.jpg?1664121481"
					alt="perfil"
				/>
			</div>
			<Title content="Projects" />
			<div className="Projects">
				<div className="Project">
					<Description content="Meu primeiro projeto com programação. Nesse projeto fiz a minha versão da library Libc, todo feito em linguagem C com funções limitadas. Aqui aprendi os básicos da programação, início de manipulação de memória e criação de Makefile." />
					<div className="aClass">
						<a target="_blank" href="https://github.com/RichardWallier/42Cursus-libft" rel="noreferrer">
							<img className="ProjectImage" alt="libft"
								src="https://user-images.githubusercontent.com/91036103/177065431-91765077-1a29-4fa5-953a-8fb9e5844378.png">
							</img>
						</a>
					</div>
				</div>
				<div className="Project">
					<Description content="Nesse projeto fiz uma função que lê e armazena o conteúdo lido de um File descriptor de acordo com um buffer_size. Todo feito em linguagem C com funções limitadas. Aqui aprendi Manipulação de memória, Variáveis estáticas e Macros." />
					<div className="aClass">
						<a target="_blank" href="https://github.com/RichardWallier/42Cursus-GetNextLine" rel="noreferrer">
							<img className="ProjectImage" alt="gnl"
								src="https://user-images.githubusercontent.com/91036103/177065437-aa5abbe1-9e6d-4b42-b1d4-551722f0ac97.png">
							</img>
						</a>
					</div>
				</div>
			</div>
			<div className="Projects">
				<div className="Project">
					<Description content="Nesse projeto fiz a minha versão da função printf. Todo feito em linguagem C com funções limitadas. Aqui aprendi Argumentos variados em C manipulação de memória conversão de dados." />
					<div className="aClass">
						<a target="_blank" href="https://github.com/RichardWallier/42Cursus-ft_printf" rel="noreferrer">
							<img className="ProjectImage" alt="ft_printf"
								src="https://user-images.githubusercontent.com/91036103/177065616-f52b5ad5-f462-4037-9daf-e50ef8016b92.png">
							</img>
						</a>
					</div>
				</div>
				<div className="Project">
					<Description content="Nesse projeto fiz uma máquina virtual com features para criação de servidor e um site para hospedá-lo nela. feito no Virtualbox utilizando debian bullseye.Aqui aprendi criação de maquinas virtuais, segurança da informação, criação de sites com wordpress, Mariadb e lighttpd." />
					<div className="aClass">
						<a target="_blank" href="https://github.com/RichardWallier/42Cursus-born2beroot" rel="noreferrer">
							<img className="ProjectImage" alt="born2beroot"
								src="https://user-images.githubusercontent.com/91036103/180113397-35e858d9-998d-4898-a5c5-7e2f50caf15b.png">
							</img>
						</a>
					</div>
				</div>
			</div>
			<div className="Project">
				<Description content="Nesse projeto fiz um programa que reproduz o operador pipe do bash. todo feito em linguagem C com funções limitadas. Aqui aprendi execução de comandos bash via Código, multi-processos e pipe para comunicação entre processos." />
				<div className="aClass">
					<a target="_blank" href="https://github.com/RichardWallier/42Cursus-pipex" rel="noreferrer">
						<img className="ProjectImage" alt="pipex"
							src="https://user-images.githubusercontent.com/91036103/180113815-5daad004-fe12-4684-9cf8-f8ef8bf9086b.png">
						</img>
					</a>
				</div>
			</div>
			<div className="Project">
				<Description content="Nesse projeto fiz um jogo com fase personalizável pelo jogador, utilizando uma versão reduzida da libx todo feito em linguagem C com funções limitadas. Aqui aprendi conceitos de computação gráfica, estrutura de dados e animação gráfica." />
				<div className="aClass">
					<a target="_blank" href="https://github.com/RichardWallier/42Cursus-so_long" rel="noreferrer">
						<img className="ProjectImage" alt="so_long"
							src="https://user-images.githubusercontent.com/91036103/188285586-82871a17-57d0-4b24-b720-32b683adf23d.png">
						</img>
					</a>
				</div>
			</div>
			<div className="Project">
				<Description content="Nesse projeto fiz um programa ordena uma stack com números fornecidos como parâmetro utilizando somente algumas operações na stack, como swap, rotate, reverse rotate, entre outros. Todo feito em linguagem C com funções limitadas. Aqui aprendi algoritmos de ordenação, big-o notation e pilhas." />
				<div className="aClass">
					<a target="_blank" href="https://github.com/RichardWallier/42Cursus-push_swap" rel="noreferrer">
						<img className="ProjectImage" alt="push_swap"
							src="https://user-images.githubusercontent.com/91036103/194776729-75dfd384-11b0-4cac-a13c-386c44bf0244.png">
						</img>
					</a>
				</div>
			</div>
		</div >
	);
};

export default Home;
