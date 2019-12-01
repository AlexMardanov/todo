import React from 'react'
import PropTypes from 'prop-types'

function ItemStatusFilter({ filterState, onFilterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  function handleFilterChange(state) {
    return () => onFilterChange(state)
  }

  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => (
        <button
          key={name}
          type="button"
          className={`btn ${
            filterState === name ? 'btn-info' : 'btn-outline-secondary'
          }`}
          onClick={handleFilterChange(name)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

ItemStatusFilter.propTypes = {
  filterState: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export { ItemStatusFilter }
