import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
	palette: {
		primary: {
			light: "#af52bf",
			main: "#9c27b0",
			dark: "#6d1b7b",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ffea00",
			main: "#ffea00",
			dark: "#b2a300",
			contrastText: "#000",
		},
	},
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: "#ffea00",
					backgroundColor: "transparent",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: "#ffea00",
					backgroundColor: "transparent",
				},
				input: {
					color: "#ffea00",
					backgroundColor: "transparent",
					"&:-webkit-autofill": {
						WebkitBoxShadow: "0 0 0 100px #6d1b7b inset",
						WebkitTextFillColor: "#ffea00",
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				filled: {
					backgroundColor: "transparent",
				},
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					color: "#ffea00",
				},
			},
		},
	},
});

export default customTheme;
