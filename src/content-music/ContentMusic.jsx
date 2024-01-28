import React from "react";
import { useEffect, useState } from "react";
import "./ContentMusic.css";
import { RiPlayFill } from "@remixicon/react";
import img1 from "../assets/playlist/1.jpeg";
import img2 from "../assets/playlist/2.png";
import img3 from "../assets/playlist/3.jpeg";
import img4 from "../assets/playlist/4.jpeg";
import img5 from "../assets/playlist/5.jpeg";
import img6 from "../assets/playlist/6.jpeg";
import img7 from "../assets/playlist/7.jpeg";
import img8 from "../assets/playlist/8.jpeg";
import img9 from "../assets/playlist/9.jpeg";
import img10 from "../assets/playlist/10.jpeg";
import img11 from "../assets/playlist/11.jpeg";
import img12 from "../assets/playlist/12.jpeg";
import img13 from "../assets/playlist/13.jpeg";
import img14 from "../assets/playlist/14.jpeg";
import img15 from "../assets/playlist/15.jpeg";
//import urlApi from '../assets/artists.json'

const ContentMusic = props => {
	const [nameArtist, setNameArt] = useState("Not found");
	const [imageArtist, setImageArt] = useState("Not found");
	const [genreArtist, setGenre] = useState("Not found");
	const [hideOr, setHide] = useState(true);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}?name_like=${props.result.toLowerCase()}`)
			.then(response => response.json())
			.then(result => getData(result));
	}, [props.result]);

	function getData(data) {
		let a;
		let b;
		let c;
		data.forEach((item) => {
			a = item.name;
			b = item.urlImg;
			c = item.genre;
		});
		if (a && b && c) { 
			//verifica se os dados (a,b,c) possuem valores
			setNameArt(a);
			setImageArt(b);
			setGenre(c);
			setHide(false); //mostra o card do artista
			return;
		}else{
			setHide(true); //esconde o card do artista
		}
	}

	let time = new Date().getHours();
	let greetins = "...";
	if (time > "00" && time <= "11") {
		greetins = "Bom dia!";
	} else if (time > "11" && time <= "17") {
		greetins = "Boa tarde!";
	} else {
		greetins = "Boa noite!";
	}
	return (
		<>
			<section className={props.result === "" ? "main__content__music" : "hide"} id="main-content-music">
				<div className="content__music__heading">
					<h1 className="titles" id="reception-text">
						{" "}
						{greetins}{" "}
					</h1>
					<h2 className="subtitles">Navegar por todas as seções</h2>
				</div>
				<div className="content__music__grid">
					<div className="music__grid">
						<div className="music__card c1">
							<div className="card--wrapper">
								<h3 className="card__title">Boas Festas</h3>
								<img className="card__image" src={img1} />
							</div>
						</div>
						<div className="music__card c2">
							<div className="card--wrapper">
								<h3 className="card__title">Feitos para você</h3>
								<img className="card__image" src={img2} />
							</div>
						</div>
						<div className="music__card c3">
							<div className="card--wrapper">
								<h3 className="card__title">Lançamentos</h3>
								<img src={img3} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c4">
							<div className="card--wrapper">
								<h3 className="card__title">Creators</h3>
								<img src={img4} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c5">
							<div className="card--wrapper">
								<h3 className="card__title">Para treinar</h3>
								<img src={img5} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c6">
							<div className="card--wrapper">
								<h3 className="card__title">Podcasts</h3>
								<img src={img6} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c7">
							<div className="card--wrapper">
								<h3 className="card__title">Sertanejo</h3>
								<img src={img7} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c8">
							<div className="card--wrapper">
								<h3 className="card__title">Samba e pagode</h3>
								<img src={img8} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c9">
							<div className="card--wrapper">
								<h3 className="card__title">Funk</h3>
								<img src={img9} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c10">
							<div className="card--wrapper">
								<h3 className="card__title">MPB</h3>
								<img src={img10} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c11">
							<div className="card--wrapper">
								<h3 className="card__title">Rock</h3>
								<img src={img11} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c12">
							<div className="card--wrapper">
								<h3 className="card__title">Hip Hop</h3>
								<img src={img12} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c13">
							<div className="card--wrapper">
								<h3 className="card__title">Indie</h3>
								<img src={img13} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c14">
							<div className="card--wrapper">
								<h3 className="card__title">Relax</h3>
								<img src={img14} alt="" className="card__image" />
							</div>
						</div>
						<div className="music__card c15">
							<div className="card--wrapper">
								<h3 className="card__title">Música latina</h3>
								<img src={img15} alt="" className="card__image" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className={props.result !== "" && !hideOr ? "artist__container" : "hide"} id="artist-container">
				<div className="artist__card">
					<div className="artist__card__top">
						<div className="artist__image--container">
							<img className="artist__image" id="artist-image" src={imageArtist} alt="" />
							<button className="artist__play">
								<RiPlayFill size={36} />
							</button>
						</div>
						<span className="artist__name" id="artist-name">
							{nameArtist}
						</span>
					</div>
					<span className="artist__genre" id="artist-genre">
						{genreArtist}
					</span>
				</div>
			</div>
		</>
	);
};

export default ContentMusic;
