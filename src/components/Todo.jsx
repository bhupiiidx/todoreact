import { List, ListItem, ListItemAvatar, ListItemText, } from '@mui/material'
import React from 'react'

function Todo(props) {
        return (
                <List>
                        <ListItem>
                                <ListItemAvatar />
                                <ListItemText primary={props.todo} secondary="Dummy Text"/>
                        </ListItem>
                </List>
        )
}

export default Todo
