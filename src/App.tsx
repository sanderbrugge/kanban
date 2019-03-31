import React, { Component } from 'react';
import Home from './scenes/Home';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
