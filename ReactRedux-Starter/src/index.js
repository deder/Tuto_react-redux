import React from 'react'
import ReactDom from 'react-dom'
import IhmConfig from './configs/ihm.config'
import App from './containers/app'

const API_KEY = IhmConfig.API_KEY;

ReactDom.render(<App />, document.querySelector(".container"));