import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../images/logo.jpg";

const Logo = () => {
	return (
		<Link to="/" className="logo">
			<img className="logo__image" src={logo} alt="" />
		</Link>
	);
};

export default Logo;
