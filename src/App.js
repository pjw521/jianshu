import React, { Component, Fragment } from 'react';
import Header from "./common/header/header.js"
import "./statics/fonts/iconfont.js"
import { Provider } from "react-redux";
import { store } from "./store/store.js"
import { BrowserRouter, Route } from "react-router-dom"
import { Home, Detail } from "./pages"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Fragment>
              <Header></Header>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
