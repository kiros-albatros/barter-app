import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
	return (
		<div className="auth">
			<Header />
			<RegisterForm />
			<Footer />
		</div>
	);
};

export default RegisterPage;
