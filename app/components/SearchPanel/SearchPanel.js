import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input } from '../Input'

const placeholder = 'type to search'

function SearchPanel({ onSearchChange }) {
  const [term, setTerm] = useState('')
  function handleInputChange(e) {
    const text = e.target.value
    setTerm(text)
    onSearchChange(text)
  }
  return (
    <Input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={term}
      onChange={handleInputChange}
    />
  )
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func,
}

export { SearchPanel }
