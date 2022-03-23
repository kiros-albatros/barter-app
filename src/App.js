import "normalize.css";
import { Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import AboutPage from "./routes/AboutPage/AboutPage";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import FindInsiderPage from "./routes/FindInsiderPage/FindInsiderPage";
import InstallAppPage from "./routes/InstallAppPage/InstallAppPage";
import RegisterPage from "./routes/RegisterPage/RegisterPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import Users from "./routes/Users/Users";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Theme.js";

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<div className="App">
				<Routes>
					<Route path="/" exact element={<WelcomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/find" element={<FindInsiderPage />} />
					<Route path="/install" element={<InstallAppPage />} />
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
