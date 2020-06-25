import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

function createAppRoot () {
  let relatedVideosContainer = document.getElementById('related')
  let appContainer = document.createElement('div')
  relatedVideosContainer.prepend(appContainer)
  return appContainer
}

let root = createAppRoot()
ReactDOM.render(<App/>, root)
