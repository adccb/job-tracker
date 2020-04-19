import React from 'react'
import ReactDOM from 'react-dom'
import zango from 'zangodb'

import './index.css'
import App from './App'
import Zango from './Zango'

ReactDOM.render(
  <React.StrictMode>
    <Zango zango={zango}>
      <App />
    </Zango>
  </React.StrictMode>,
  document.getElementById('root')
)
