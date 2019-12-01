import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TodoListItem } from '../TodoListItem'

const Li = styled.li`
  padding: 0.25rem 0.75rem;
`

function TodoList({ todos, onDeleted, onToggleImportant, onToggleDone }) {
  function handleDelete(index) {
    return () => onDeleted(index)
  }

  function handleToggleImportant(index) {
    return () => onToggleImportant(index)
  }

  function handleToggleDone(index) {
    return () => onToggleDone(index)
  }

  const elements = todos.map(item => {
    const { id, label, important, done } = item

    return (
      <Li key={id} className="list-group-item">
        <TodoListItem
          label={label}
          important={important}
          done={done}
          onDelete={handleDelete(id)}
          onToggleImportant={handleToggleImportant(id)}
          onToggleDone={handleToggleDone(id)}
        />
      </Li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
}

export { TodoList }
