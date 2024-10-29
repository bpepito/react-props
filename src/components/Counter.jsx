import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    name: "Hello Wolrd",
    image: "http://picsum.photos/200",
    // count: 0,
    count2: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  getName() {
    return <h1>Big Name</h1>;
  }

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

  renderTags() {
    return (
      this.state.tags.length > 0 && (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )
    );
  }

  render() {
    // const props = this.props;
    // console.log("props", props);

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
        {/* {this.getName()} */}
        {/* {this.renderTags()} */}
        {/* <img src={this.state.image}></img> */}
        {/* <div>Name: {this.state.name}</div> */}
        {/* <div>Counter: {this.state.count}</div> */}
        {/* <div>Counter: {this.state.count2}</div>
        <button onClick={() => this.increment2()}>Increment</button> */}
      </>
    );
  }
}
