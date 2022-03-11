import "./Burger.scss";

import { useDispatch, useSelector } from "react-redux";

const Burger = () => {
	const dispatch = useDispatch();
	const burgerState = useSelector((state) => state.burgerState);
	//	console.log(burgerState);

	const rotateLines = () => {
		dispatch({ type: "BURGER_ROTATE", payload: "burger--rotated" });
	};

	//	const [burgerState, setburgerState] = useState("");

	return (
		<div className={`burger ${burgerState}`} onClick={() => rotateLines()}>
			<span className="burger__line burger__line--top"></span>
			<span className="burger__line burger__line--middle"></span>
			<span className="burger__line burger__line--bottom"></span>
		</div>
	);
};

export default Burger;

/*`burger ${burgerState}`} onClick={burgerToggle*/
