import React from 'react'
import { Button, List, ListItem, ListItemText, } from '@mui/material'
import db from "../firebase_config"
import { DeleteForever } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import { grey, blue } from '@mui/material/colors'

function Todo(props) {

        const toggleTodo = () => {db.collection('todos').doc(props.todo.id).update({inprogress:!props.todo.inprogress})}

        const deleteTodo = () => db.collection('todos').doc(props.todo.id).delete()

        const editTodo = () => {
                console.log(props.todo.id, " => ", props.todo.todo);
        }


        return (
                <List className="listItem">
                        <ListItem>
                                <ListItemText primary={(props.indexing + 1) + ". " + props.todo.todo} secondary={props.todo.inprogress ? "In Progress" : "Completed"}/>
                                        
                        </ListItem>
                        <ListItem sx={{ display: 'flex',bgcolor: 'background.paper' }}>
                                {props.todo.inprogress && <Button
                                        style={{"margin-right":"10px"}}
                                        color="success"
                                        variant="text"
                                        onClick={toggleTodo}>
                                        <CheckIcon />
                                </Button>}
                                {props.todo.inprogress && <Button
                                        style={{"margin-right":"10px"}}
                                        variant="text"
                                        color="secondary"
                                        onClick={editTodo}>
                                        <CreateIcon />
                                </Button>}
                                <Button
                                        color="error"
                                        variant="text"
                                        onClick={deleteTodo}>
                                        <DeleteForever />
                                </Button>
                        </ListItem>
                </List>
        )
}

export default Todo
