import React, {useState} from "react";

import "./MainContent.css";
import Topbar from '../header/Topbar.jsx'
import ContentMusic from '../content-music/ContentMusic.jsx'

const MainContent = ({menuState}) => {
	const [search, setSearch] = useState('');
	
	/*função para armazenar na variavel 'search' 
	 o valor do input de pesquisa*/
	let handleInput = (value) => {
		//value será o valor recebido do input.
		setSearch(value);
	}
	return (
		<main className="main__content">
			{/*A função handleInput será passada pela propriedade 'handle'
			para o componente Topbar.*/}
			<Topbar menuState={menuState} handle={handleInput} />
			{/* a variável 'search'  será passada pela propriedade 'result' para o componente ContentMusic.*/}
			<ContentMusic result={ search } />
		</main>
	);
};

export default MainContent;
