import React, { useState, useEffect } from "react";
import './App.css';
import { Button, FormControl, FormControlLabel, Input, InputLabel, Switch } from '@mui/material';
import Todos from './components/Todos';
import db from './firebase_config';
import firebase from 'firebase';

function App() {

	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	const [order, setOrder] = useState(false)


	useEffect(() => {
		console.log("order current status",order);
		console.log("todos len=>",todos.length,"data",todos);
		db.collection("todos").orderBy("timestamp", order ? "asc" : "desc").onSnapshot(snapshot => {
			console.log("data loop is", snapshot.docs.map(doc => doc.data().todo));
			setTodos(snapshot.docs.map(doc => ({id:doc.id, todo: doc.data().todo, inprogress : doc.data().inprogress})))
		})
	}, [order])

	const addTodo = event => {
		event.preventDefault();

		db.collection("todos").add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			inprogress: true,
		})
		setTodos([...todos, input])
		setInput('')
		setOrder(order)
	}

	const label = { inputProps: { 'aria-label': 'Switch demo' } };

	const swithDisplayTodo = event => setOrder(event.target.checked)

	return (
		<div className="App">
			<h1 style={{ "margin-bottom": "60px" }}> Todos App Using ReactJs & Firebase</h1>
			<div>
				<form>
					<FormControl>
						<InputLabel>Add Todo Items</InputLabel>
						<Input
							value={input}
							onChange={event => setInput(event.target.value)}
						/>
					</FormControl>
					<Button
						variant="contained"
						onClick={addTodo}
						type="submit"
						disabled={!input}>
						Add Todo
					</Button>
				</form>
			</div>
			<FormControlLabel control={<Switch {...label} labelPlacement="top" defaultChecked={order} onChange={swithDisplayTodo} />} label="Ascending/Descending" />
			<Todos loopData={todos} />
		</div>
	);
}

export default App;
