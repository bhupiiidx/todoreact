import React from 'react'
import { Button, List, ListItem, ListItemText, } from '@mui/material'
import db from "../firebase_config"
import { DeleteForever } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Todo(props) {

        const toggleTodo = event => {db.collection('todos').doc(props.todo.id).update({inprogress:!props.todo.inprogress})}

        const deleteTodo = event => db.collection('todos').doc(props.todo.id).delete()


        return (
                <List>
                        <ListItem>
                                <ListItemText primary={props.todo.todo} secondary={props.todo.inprogress ? "In Progress" : "Completed"}/>
                                <Button
                                        style={{"margin-right":"10px"}}
                                        color={props.todo.inprogress ? "success" : "secondary"}
                                        variant="contained"
                                        onClick={toggleTodo}>
                                        {props.todo.inprogress ? <CheckIcon /> : <CloseIcon />}
                                </Button>
                                <Button
                                        color="error"
                                        variant="outlined"
                                        onClick={deleteTodo}>
                                        <DeleteForever />
                                </Button>
                        </ListItem>
                </List>
        )
}

export default Todo
