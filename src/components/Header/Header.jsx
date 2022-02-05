import "./Header.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Entry from "../Entry/Entry";

const Header = () => {
	return (
		<div className="header">
			<Logo />
			<Navigation />
			<Entry />
		</div>
	);
};

export default Header;
