import React, { Component } from "react";
import Home from "./scenes/Home";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./ducks";

class App extends Component {
  render() {
    return (
      // @ts-ignore connect redux dev tools
      <Provider store={createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Home />
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
