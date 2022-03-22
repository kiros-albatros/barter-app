import "./Navigation.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = ({ menu }) => {
	const mobileNav = useSelector((state) => state.mobileNav);

	function askApi() {
		fetch("http://barter-server/omar", {
			method: "get",
		})
			.then((response) => response.text())
			.then((response) => {
				console.log(response);
			});
	}

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
				<Link to="/auth" className="btn btn--entry" onClick={askApi}>
					Войти
				</Link>
				<button onClick={askApi} className="btn btn--registration">
					Регистрация
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
