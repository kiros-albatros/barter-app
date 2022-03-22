import { useEffect, useState } from "react";

const Users = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await fetch("http://127.0.0.1:8000/todos", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();

			if (response.status === 200) {
				//	console.log(result);
				setTodos(result.data);
			}
		})();
	});
	return (
		<>
			<h1>Users</h1>
			<ul>
				{todos.map((element, index) => (
					<li key={index}>{element.title}</li>
				))}
			</ul>
		</>
	);
};

export default Users;
