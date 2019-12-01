import React, { useState } from 'react'

import { AppHeader } from '../AppHeader'
import { SearchPanel } from '../SearchPanel'
import { TodoList } from '../TodoList'
import { ItemStatusFilter } from '../ItemStatusFilter'
import { ItemAddForm } from '../ItemAddForm'

import './app.css'

function App() {
  const initialState = [
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch'),
  ]
  const [todoData, setTodoData] = useState(initialState)
  const [term, setTerm] = useState('')
  const [filterState, setFilterState] = useState('all')

  function createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: label + Math.random(),
    }
  }

  const deleteItem = id => {
    const idx = todoData.findIndex(el => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const addItem = text => {
    if (!text) return
    const newItem = createTodoItem(text)
    const newArr = [...todoData, newItem]
    setTodoData(newArr)
  }

  function toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  const onToggleDone = id => {
    setTodoData(toggleProperty(todoData, id, 'done'))
  }

  const onToggleImportant = id => {
    setTodoData(toggleProperty(todoData, id, 'important'))
  }

  function search(items, word) {
    if (!word) return items

    return items.filter(
      item => item.label.toLowerCase().indexOf(word.toLowerCase()) > -1,
    )
  }

  function filter(items) {
    switch (filterState) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  const doneCount = todoData.filter(el => el.done).length
  const todoCount = todoData.length - doneCount
  const visibleItems = filter(search(todoData, term))

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={setTerm} />
        <ItemStatusFilter
          filterState={filterState}
          onFilterChange={setFilterState}
        />
      </div>

      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />

      <ItemAddForm onItemAdd={addItem} />
    </div>
  )
}

export { App }
