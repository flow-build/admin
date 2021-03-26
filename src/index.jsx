import React from 'react'
import ReactDOM from 'react-dom'

import 'react-notifications-component/dist/theme.css'
import * as serviceWorker from 'utils/initializer/serviceWorker'

import App from './App'

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
