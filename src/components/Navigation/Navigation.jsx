import "./Navigation.scss";

const Navigation = ({ items }) => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				{items.map((item, index) => (
					<li key={index} className="nav__item">
						<a className="nav__link" href="#">
							{item}
						</a>
					</li>
				))}
			</ul>

			<div className="entry">
				<button className="btn btn--entry">Войти</button>
				<button className="btn btn--registration">Регистрация</button>
			</div>
		</nav>
	);
};

export default Navigation;
