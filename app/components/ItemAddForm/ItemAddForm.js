import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  margin-top: 10px;
`

const Input = styled.input`
  margin-right: 3px;
`

function ItemAddForm(props) {
  const { onItemAdd } = props
  const [label, setLable] = useState('')

  function handleLabelChange(e) {
    setLable(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onItemAdd(label)
    setLable('')
  }

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Input
        type="text"
        className="form-control"
        onChange={handleLabelChange}
        placeholder="What needs to be done"
        value={label}
      />
      <button className="btn btn-outline-secondary" type="submit">
        Add Item
      </button>
    </Form>
  )
}

ItemAddForm.propTypes = {
  onItemAdd: PropTypes.func,
}

export { ItemAddForm }
