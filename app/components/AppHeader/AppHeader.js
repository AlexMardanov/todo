import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.div`
  align-items: flex-end;
`

const H1 = styled.h1`
  flex-grow: 1;
`

const H2 = styled.h1`
  font-size: 1.2rem;
  color: grey;
`

const AppHeader = ({ toDo, done }) => (
  <Header className="d-flex">
    <H1>Todo List</H1>
    <H2>
      {toDo} more to do, {done} done
    </H2>
  </Header>
)

AppHeader.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
}

export { AppHeader }
