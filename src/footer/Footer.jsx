import React from 'react'
import './Footer.css'

const Footer = () => {
	
	return(
		<footer className="footer__content">
			<div className="footer__text">
				<span className="footer__title">Testar o Premium de graça</span>
				<span className="footer__subtitle">
					Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
				</span>
			</div>
			<button className="button button--inscrever">Inscreva-se grátis</button>
		</footer>
	);
}

export default Footer;