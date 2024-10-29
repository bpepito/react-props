import React, { Component } from "react";

export default class Counter extends Component {
  // getName() {
  //   return <h1>Big Name</h1>;
  // }

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

  // renderTags() {
  //   return (
  //     this.state.tags.length > 0 && (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     )
  //   );
  // }

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