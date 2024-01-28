import React, {useState} from "react";

import "./MainContent.css";
import Topbar from '../header/Topbar.jsx'
import ContentMusic from '../content-music/ContentMusic.jsx'

const MainContent = ({menuState}) => {
	const [text, setText] = useState('');
	let handleInput = (value) => {
		setText(value);
	}
	return (
		<main className="main__content">
			<Topbar menuState={menuState} handle={handleInput} />
			<ContentMusic result={ text } />
		</main>
	);
};

export default MainContent;
