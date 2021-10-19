import React from 'react'
import { Button, List, ListItem, ListItemAvatar, ListItemText, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import db from "../firebase_config"
import Delete from '@mui/icons-material/Delete';
import { DeleteForever } from '@mui/icons-material';

function Todo(props) {

        const deleteTodo = event => {
                console.log("log",event.target);
                db.collection('todos').doc(props.todo.id).delete()
        }


        return (
                <List>
                        <ListItem>
                                <ListItemAvatar />
                                <ListItemText primary={props.todo.todo} secondary="Dummy Text"/>
                        </ListItem>
                        <Button
                                color="error"
                                variant="outlined"
                                onClick={deleteTodo}>
                                <DeleteForever />
                        </Button>
                </List>
        )
}

export default Todo
