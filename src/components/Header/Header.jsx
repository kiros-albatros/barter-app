import "./Header.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

const Header = () => {
	// пакуем объекты в массив для array.map в глупом компоненте
	const menu = [
		{
			link: "/AboutPage",
			label: "О нас",
		},
		{
			link: "/FindInsiderPage",
			label: "Найти инсайдера",
		},
		{
			link: "/InstallAppPage",
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
