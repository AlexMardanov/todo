import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons'

const Label = styled.span`
  margin-left: 1.25rem;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
`

const Wrapper = styled.span`
  font-size: 1.25rem;

  ${Label} {
    text-decoration: ${props => (props.done ? 'line-through' : null)};
    font-weight: ${props => (props.important ? 'bold' : null)};
    color: ${props => (props.important ? 'steelblue' : null)};
  }
`

const Button = styled.button`
  width: 35px;
  margin: 3px;
`
function TodoListItem(props) {
  const {
    label,
    onDelete,
    onToggleImportant,
    onToggleDone,
    important,
    done,
  } = props

  return (
    <Wrapper done={done} important={important}>
      <Label onClick={onToggleDone}>{label}</Label>

      <Button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <FontAwesomeIcon icon={faExclamation} />
      </Button>

      <Button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </Wrapper>
  )
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  onDelete: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  important: PropTypes.bool,
  done: PropTypes.bool,
}

export { TodoListItem }
