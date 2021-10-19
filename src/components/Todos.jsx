import { Box } from '@mui/system'
import React from 'react'
import Todo from './Todo'

function Todos(props) {
     return (
          <Box>
               <ul>{props.loopData.map(todo => (<Todo todo={todo} />))}</ul>
          </Box>
     )
}

export default Todos
