import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import axios from "axios";
import "./RegisterForm.scss";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		password: "",
		email: "",
	});

	function changeInput(e, input) {
		setFormData({
			...formData,
			input: e.target.value,
		});
		console.log(formData);
	}

	const signIn = async () => {
		axios.defaults.withCredentials = true;
		axios.defaults.baseURL = "http://127.0.0.1:8000";
		// const data = {
		// 	name: "peterpeter500",
		// 	email: "peter500@example.com",
		// 	password: "password500",
		// };

		axios
			.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response);
				axios
					.post("http://127.0.0.1:8000/api/register", formData)
					.then((response) => {
						console.log(response);
					});
			});
	};

	return (
		<div className="auth__form">
			<div className="auth__row">
				<TextField
					sx={{
						marginRight: "50px",
					}}
					fullWidth
					label="Имя"
					variant="outlined"
					color="secondary"
					onChange={(e, name) => {
						changeInput(e, name);
					}}
				/>
				<TextField
					fullWidth
					label="Город"
					variant="outlined"
					color="secondary"
					onChange={(e, place) => {
						changeInput(e, place);
					}}
				/>
			</div>
			<div className="auth__row">
				<TextField
					sx={{
						marginRight: "50px",
					}}
					fullWidth
					label="Знания"
					variant="outlined"
					color="secondary"
					onChange={(e, place) => {
						changeInput(e, place);
					}}
				/>
				<Select
					color="secondary"
					fullWidth
					//	margin="normal"
					labelId="demo-simple-select-label"
					defaultValue={4}
					//	label="Age"
					//	onChange={handleChange}
				>
					<MenuItem value={0}>Новичок</MenuItem>
					<MenuItem value={1}>Джун</MenuItem>
					<MenuItem value={2}>Миддл</MenuItem>
					<MenuItem value={3}>Синьор</MenuItem>
					<MenuItem disabled value={4}>
						Уровень знаний
					</MenuItem>
				</Select>
			</div>
			<div className="auth__row">
				<TextField
					sx={{
						marginRight: "50px",
					}}
					fullWidth
					label="Интерес"
					variant="outlined"
					color="secondary"
					onChange={(e, interest) => {
						changeInput(e, interest);
					}}
				/>
				<Select
					className="custom-select"
					color="secondary"
					fullWidth
					//	margin="normal"
					labelId="demo-simple-select-label"
					defaultValue={4}
					//	label="Age"
					//	onChange={handleChange}
				>
					<MenuItem value={0}>Онлайн</MenuItem>
					<MenuItem value={1}>Офлайн</MenuItem>
					<MenuItem value={2}>Онлайн+Офлайн</MenuItem>
					<MenuItem disabled value={4}>
						Форма общения
					</MenuItem>
				</Select>
			</div>
			<div className="auth__row">
				<TextField
					sx={{
						marginRight: "50px",
					}}
					fullWidth
					label="Email"
					variant="outlined"
					color="secondary"
					onChange={(e, email) => {
						changeInput(e, email);
					}}
				/>
				<TextField
					fullWidth
					label="Пароль"
					variant="outlined"
					color="secondary"
					onChange={(e, password) => {
						changeInput(e, password);
					}}
				/>
			</div>
			<div className="auth__row auth__row--centered">
				<div>
					<FormLabel
						id="demo-controlled-radio-buttons-group"
						sx={{ color: "yellow" }}
					>
						Gender
					</FormLabel>
					<RadioGroup
						sx={{
							"& .MuiSvgIcon-root": {
								fontSize: 20,
							},
						}}
						row
						aria-labelledby="demo-controlled-radio-buttons-group"
						name="controlled-radio-buttons-group"
						defaultValue="female"
						//	value={value}
						//	onChange={handleChange}
					>
						<FormControlLabel
							color="secondary"
							value="female"
							control={<Radio />}
							label="Female"
						/>
						<FormControlLabel
							value="male"
							control={<Radio />}
							label="Male"
						/>
					</RadioGroup>
				</div>

				<Button
					sx={{ maxHeight: "40px" }}
					color="secondary"
					variant="outlined"
					component="label"
				>
					Upload Photo
					<input type="file" hidden />
				</Button>
			</div>

			{/* {inputsData.map((element, index) => (
				<label key={index} htmlFor="">
					{element.label}
					<input
						type="text"
						onChange={(e, element.dataKey) => {
							changeInput(e, element.dataKey);
						}}
					/>
				</label>
			))} */}
			<div className="auth__row--centered">
				<Button
					sx={{ margin: "0 auto" }}
					variant="outlined"
					color="secondary"
					size="large"
					onClick={signIn}
				>
					Enter
				</Button>
			</div>
		</div>
	);
};

export default RegisterForm;
