import "./Footer.scss";

const Footer = () => {
	const socialItems = ["insta", "vk", "telegram", "whatsapp"];
	return (
		<div className="footer">
			<div className="footer__column">
				<a href="#" className="footer__link">
					copyright
				</a>
				<a href="#" className="footer__link">
					условия использования
				</a>
				<a href="#" className="footer__link">
					2022 year
				</a>
			</div>
			<div className="footer__column">
				<a href="#" className="footer__link">
					FAQ
				</a>
				<a href="#" className="footer__link">
					Связаться с нами/ контакты
				</a>
			</div>
			<div className="footer__column">
				<ul className="footer__social-list">
					{socialItems.map((socialItem, index) => {
						return (
							<li key={index} className="footer__social-item">
								<a
									className={`footer__social-link footer__social-link--${socialItem}`}
									href="#"
								></a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
