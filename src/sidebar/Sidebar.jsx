import React from "react";
import {RiArrowLeftSLine, RiHome2Line, RiSearch2Line, RiBook2Line, RiAddLine, RiMusicLine, RiLoginCircleLine, RiGlobalLine } from "@remixicon/react";
import "./Sidebar.css";
import banner from '../assets/logo-spotify.png'

const Sidebar = (props) => {
	return (
		<>
			<div className={props.state ? 'navbar navbar-open' : 'navbar navbar-hide'}>
				<nav className="navbar__navigation">
					<button onClick={props.menuClose} className="arrow-button mobile-left-arrow">
						<RiArrowLeftSLine size={36} />
					</button>
					<div className="logo">
						<a href="#">
							<img src={banner} alt="Logo do Spotify" />
						</a>
					</div>
					<ul>
						<li>
							<a href="">
								<RiHome2Line className="fa" />
								<span>Início</span>
							</a>
						</li>
						<li>
							<a href="#music">
								<RiSearch2Line className="fa" />
								<span>Buscar</span>
							</a>
						</li>
					</ul>
					<ul className="mobile-login">
						<li className="mobile-login-item">
							<a href="">
								<RiMusicLine className="ri" />
								<span>Inscreva-se</span>
							</a>
						</li>
						<li className="mobile-login-item">
							<a href="">
								<RiLoginCircleLine className="ri" />
								<span>Login</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className="navbar__biblioteca">
					<button>
						<span>
							<RiBook2Line className="ri" />
							Sua Biblioteca
							<RiAddLine className="fa" />
						</span>
					</button>
					<div className="biblioteca__card">
						<span>
							<strong>Crie sua primeira playlist</strong>
						</span>
						<span>É fácil, vamos te ajudar.</span>
						<button className="button">Criar Playlist</button>
					</div>
					<div className="biblioteca__card">
						<span>
							<strong>Que tal seguir um Podcast novo?</strong>
						</span>
						<span>Avisaremos você sobre novos episódios.</span>
						<button className="button">Explorar Podcasts</button>
					</div>
				</div>
				<div className="sidebar__bottom">
					<div className="cookie">
						<a href="">Legal</a>
						<a href="">Centro de privacidade</a>
						<a href="">Política de privacidade</a>
						<a href="">Sobre anúncios</a>
						<a href="">Acessibilidade</a>
						<a href="">Notice at Collection</a>
						<a href="">Your Privacy Choices</a>
						<a href="">Cookies</a>
					</div>
					<div>
						<button className="button button--language">
							<RiGlobalLine className="fa" />
							<span>Português do Brasil</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
