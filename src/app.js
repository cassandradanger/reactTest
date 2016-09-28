/**
 * Created by casie on 9/28/16.
 */
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './components/greeting'

var root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
    <Greeting name="World" />,
        root
)