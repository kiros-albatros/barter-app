import "normalize.css";
import Welcome from "./pages/Welcome/Welcome";
// import { useDispatch, useSelector } from "react-redux";

function App() {
	/*	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash);
	console.log(cash); */

	return (
		<div className="App">
			<Welcome />
		</div>
	);
}

export default App;
