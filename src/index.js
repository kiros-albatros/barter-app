import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./styles/main.scss";

const defaultState = {
	burgerState: "",
	mobileNav: "",
};

/* action = {
	type: "",
	payload: "",
}; */
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "BURGER_ROTATE":
			if (state.burgerState !== "burger--rotated") {
				return {
					...state,
					burgerState: (state.burgerState = action.payload),
					mobileNav: (state.mobileNav = "nav--show"),
				};
			} else {
				return {
					...state,
					burgerState: (state.burgerState = ""),
					mobileNav: (state.mobileNav = ""),
				};
			}

		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
