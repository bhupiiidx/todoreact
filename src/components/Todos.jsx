import React from 'react'
import { Container } from '@mui/material'
import Todo from './Todo'

function Todos(props) {
     return (
          <Container>
               <h3 style={{"textAlign":"left"}}>List of todo items</h3>
               <ul>{props.loopData.map(todo => (<Todo todo={todo} />))}</ul>
          </Container>
     )
}

export default Todos
