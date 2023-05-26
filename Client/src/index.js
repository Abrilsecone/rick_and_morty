import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'

//$ npm i redux react-redux redux-thunk react-router-dom@6.3.0 axios



ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
