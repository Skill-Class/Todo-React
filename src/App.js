import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    // console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center ">Todo Items</h2>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} clearList={this.clearList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
