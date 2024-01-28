import React from "react";
import { RiArrowRightSLine, RiSearchLine } from '@remixicon/react'

import "./Topbar.css";

const Topbar = (props) => {
	let change = (e) => {
		let val = e.target.value;
		props.handle(val);
	}
	
	const click = () => {
		props.menuState();
	}
	
	return (
		<>
		<nav className="main__topbar">
			<div className="topbar__left">
				<div>
					<button onClick={click} className="arrow-button right-arrow">
						<RiArrowRightSLine size={36} />
					</button>
				</div>
				<div className="search">
					<RiSearchLine size={20} />
					<input onChange={change} maxLength="600" type="search" placeholder="Que música quer ouvir hoje?" name="music" id="music-search" />
				</div>
			</div>
			<div className="main__login">
				<button className="button__subscribe">Inscreva-se</button>
				<button className="button button__login">Entrar</button>
			</div>
		</nav>
		
		</>
	);
};

export default Topbar;
