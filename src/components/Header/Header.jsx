import "./Header.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

const Header = () => {
	const items = ["О нас", "Найти инсайдера", "Установить приложение"];

	return (
		<div className="header">
			<Logo />
			<Burger />
			<Navigation items={items} />
		</div>
	);
};

export default Header;
