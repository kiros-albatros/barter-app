import { useState } from "react";
import "./Burger.scss";

const Burger = () => {
	const [burgerState, setburgerState] = useState("");

	function burgerToggle() {
		if (burgerState !== "burger--rotated") {
			setburgerState("burger--rotated");
		} else {
			setburgerState("");
		}
	}

	return (
		<div className={`burger ${burgerState}`} onClick={burgerToggle}>
			<span className="burger__line burger__line--top"></span>
			<span className="burger__line burger__line--middle"></span>
			<span className="burger__line burger__line--bottom"></span>
		</div>
	);
};

export default Burger;
