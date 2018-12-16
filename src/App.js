import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'
import TileContainer from './containers/TileContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Table />
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <TileContainer />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
