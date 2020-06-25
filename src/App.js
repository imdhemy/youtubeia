import React, { Component } from 'react'
import { Container, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane attached='top' style={{ height: '600px' }}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached='top' style={{ height: '600px' }}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached='top' style={{ height: '600px' }}>Tab 3 Content</Tab.Pane>,
  },
]

class App extends Component {
  render () {
    return (
      <Container style={{ minHeight: '640px' }}>
        <Tab menu={{ attached: 'bottom', tabular: false }}
             panes={panes}/>
      </Container>
    )
  }
}

export default App