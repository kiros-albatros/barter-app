import "./Navigation.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = ({ menu }) => {
	const mobileNav = useSelector((state) => state.mobileNav);

	return (
		<nav className={`nav ${mobileNav}`}>
			<ul className="nav__list">
				{menu.map((item, index) => (
					<li key={index} className="nav__item">
						<Link to={item.link} className="nav__link">
							{item.label}
						</Link>
					</li>
				))}
			</ul>

			<div className="entry">
				<Link to="/login" className="btn btn--entry">
					Войти
				</Link>
				<Link to="/register" className="btn btn--registration">
					Регистрация
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
