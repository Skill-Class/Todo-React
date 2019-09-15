import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div
                className="input-group-text bg-primary
              text-white"
              >
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Please add an item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            className="text-capitalize btn btn-block btn-primary mt-3"
            type="submit"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
