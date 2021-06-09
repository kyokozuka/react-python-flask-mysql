import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:5000/api/user'
const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

export const useHome = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState({title: '', content: ''});
	const [deleteFlag, setDeleteFlag] = useState(false);

	useEffect(() => {
    handleGetList()
	}, [todo, deleteFlag]);

	const handleAdd = async () => {
		const method = "POST";
		const body = JSON.stringify(todo);
		const result = await fetch(`${url}/create`, {method, headers, body});
		console.log(result)
		setTodo({title: '', content: ''})
	};

	const handleDelete = async e => {
		const todoId = e.target.value;
		const method = "DELETE";
		await fetch(`${url}/delete/${todoId}`, {method, headers});
		setDeleteFlag(true)
  }
  
  const handleGetList = () => {
    axios.get(`${url}`)
		.then(v => setTodos(v.data.body))
		setDeleteFlag(false)
  }
	
	const handleChange = (input) => e => setTodo({...todo, [input]: e.target.value })

	return {
		todo,
		todos,
		handleChange,
		handleDelete,
		handleAdd,
	}
}