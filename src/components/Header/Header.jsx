import "./Header.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

const Header = () => {
	// пакуем объекты в массив для array.map в глупом компоненте
	const menu = [
		{
			link: "/about",
			label: "О нас",
		},
		{
			link: "/find",
			label: "Найти инсайдера",
		},
		{
			link: "/install",
			label: "Установить приложение",
		},
	];

	return (
		<div className="header">
			<Logo />
			<Burger />
			<Navigation menu={menu} />
		</div>
	);
};

export default Header;
