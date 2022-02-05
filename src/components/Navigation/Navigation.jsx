import "./Navigation.scss";

const Navigation = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<a className="nav__link" href="#">
						Nav1
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Nav2
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Nav3
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
