import React, { Component } from "react";

export default class Counter extends Component {
  formatText() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
    }
    return "Zero";
  }

  getClassName() {
    if (this.props.counter.value > 0) {
      return "badge bg-primary";
    } else {
      return "badge bg-warning text-dark";
    }
  }

  render() {
    const { counter, onDecrement, onDelete, onIncrement } = this.props;
    return (
      <>
        <div className="m-4">
          <span className={this.getClassName()}>{this.formatText()}</span>
          <button
            disabled={counter.value === 0}
            onClick={() => onDecrement(counter.id)}
            className="btn btn-primary ms-4"
          >
            -
          </button>
          <button
            onClick={() => onIncrement(counter.id)}
            className="btn btn-secondary ms-1"
          >
            +
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger ms-1"
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}