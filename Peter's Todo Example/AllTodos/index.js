import React, { useContext, useState } from 'react'
import { ADD_TODO, CLEAR_ALL_TODOS, TodosContext } from '../context'
import {
  Container2, Input, Button, TodosList, Row2, Header, NoTodos,
} from './styles'
import Todo from '../Todo'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AllTodos = () => {
  const { state, dispatch } = useContext(TodosContext)
  const [filter, setFilter] = useState('')
  const [todoText, setTodoText] = useState('')


  return (
    <Container>
      <Row>
        <Col>
          <Container2>
            <Row2>
              <Input id="1"
              onKeyPress={event => {if (event.key === "Enter") {
                dispatch({ action: ADD_TODO, payload: todoText });}}} // figure out how to clear line after entering
                placeholder="New todo" value={todoText} onChange={e => setTodoText(e.target.value)} />
              <Button onClick={() => dispatch({ action: ADD_TODO, payload: todoText })}>Add Todo</Button>
            </Row2>
            <Row2>
              <Input placeholder="Search todos" value={filter} onChange={e => setFilter(e.target.value)} />
              <Button onClick={() => dispatch({ action: CLEAR_ALL_TODOS })}>Search</Button>
            </Row2>
          </Container2>
        </Col>
        <Col>
          <Row2>
            <Button onClick={() => dispatch({ action: CLEAR_ALL_TODOS })}>Clear All Todos</Button>
          </Row2>
          <Header>Your Todos:</Header>
          <TodosList>
            {state.length ? state.filter(({ text }) => text.includes(filter))
              .map(({ id, ...rest }) => <Todo key={id} id={id} dispatch={dispatch} {...rest} />)
              : <NoTodos>No Todos. Enjoy your day!</NoTodos>}
          </TodosList>
        </Col>
      </Row>
    </Container>
  )
}

export default AllTodos
