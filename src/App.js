import "normalize.css";
import { Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FindInsiderPage from "./pages/FindInsiderPage/FindInsiderPage";
import InstallAppPage from "./pages/InstallAppPage/InstallAppPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/AboutPage" element={<AboutPage />} />
				<Route path="/FindInsiderPage" element={<FindInsiderPage />} />
				<Route path="/InstallAppPage" element={<InstallAppPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
