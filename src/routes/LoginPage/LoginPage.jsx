import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios.defaults.withCredentials = true;
		axios.defaults.baseURL = "http://127.0.0.1:8000";
		axios
			.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response);
				axios
					.post("http://127.0.0.1:8000/api/login", data)
					.then((response) => {
						console.log(response);
					});
			});
	};

	return (
		<div>
			<Header />

			<form
				className="login__form"
				action=""
				method="post"
				style={{ maxWidth: "1400px", margin: "30px auto" }}
			>
				<div
					className="login__row"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<TextField
						sx={{
							marginRight: "50px",
						}}
						fullWidth
						label="Email"
						variant="outlined"
						color="secondary"
						{...register("email", {
							required: "Required field",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
						error={!!errors?.email}
						helperText={errors?.email ? errors.email.message : null}
					/>

					<TextField
						fullWidth
						label="Пароль"
						variant="outlined"
						color="secondary"
						{...register("password", {
							required: "Required field",
							minLength: 8,
						})}
						error={!!errors?.password}
						helperText={
							errors?.password ? errors.password.message : null
						}
					/>
				</div>

				<div className="auth__row--centered">
					<Button
						sx={{ marginTop: "30px" }}
						variant="outlined"
						color="secondary"
						type="submit"
						onClick={handleSubmit(onSubmit)}
					>
						Enter
					</Button>
				</div>
			</form>

			<Footer />
		</div>
	);
};

export default LoginPage;
