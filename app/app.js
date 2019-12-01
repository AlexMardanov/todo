/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'

import 'sanitize.css/sanitize.css'

// Import root app
import { App } from 'components/App'

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico'
import 'file-loader?name=.htaccess!./.htaccess'
/* eslint-enable import/no-unresolved, import/extensions */

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE)
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['components/App'], () => {
    // ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()
