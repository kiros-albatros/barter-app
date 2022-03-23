import { useState } from "react";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useForm, Controller } from "react-hook-form";

import axios from "axios";
import "./RegisterForm.scss";

const RegisterForm = () => {
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
					.post("http://127.0.0.1:8000/api/register", data)
					.then((response) => {
						console.log(response);
					});
			});
	};

	return (
		<div className="auth__form">
			<form action="" method="post">
				<div className="auth__row">
					<TextField
						sx={{
							marginRight: "50px",
						}}
						fullWidth
						label="Имя"
						variant="outlined"
						color="secondary"
						error={!!errors?.name}
						helperText={errors?.name ? errors.name.message : null}
						{...register("name", { required: "Required" })}
					/>

					<TextField
						fullWidth
						label="Город"
						variant="outlined"
						color="secondary"
						error={!!errors?.place}
						helperText={errors?.place ? errors.place.message : null}
						{...register("place", { required: "Required" })}
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
						error={!!errors?.place}
						helperText={errors?.place ? errors.place.message : null}
						{...register("knowledge", { required: "Required" })}
					/>
					<Select
						color="secondary"
						fullWidth
						labelId="demo-simple-select-label"
						defaultValue={4}
						{...register("level", { required: "Required" })}
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
						{...register("interest", { required: "Required" })}
					/>
					<Select
						className="custom-select"
						color="secondary"
						fullWidth
						labelId="demo-simple-select-label"
						defaultValue={4}
						{...register("connection", { required: "Required" })}
						//	label="Age"
						//	onChange={handleChange}
					>
						<MenuItem value={"online"}>Онлайн</MenuItem>
						<MenuItem value={"offline"}>Оффлайн</MenuItem>
						<MenuItem value={"online+offline"}>
							Онлайн+Офлайн
						</MenuItem>
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
						variant="outlined"
						color="secondary"
						type="submit"
						onClick={handleSubmit(onSubmit)}
					>
						Enter
					</Button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
