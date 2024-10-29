import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
    counters2: [],
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return { ...counter, value: counter.value + 1 };
        }
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    // this.state.count++;
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return { ...counter, value: counter.value - 1 };
        }
        return counter;
      }),
    });
  };

  getCountersWithValueLength = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  render() {
    return (
      <div>
        <NavBar totalCount={this.getCountersWithValueLength()}></NavBar>
        <div className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          >
            Hello
          </Counters>
        </div>
      </div>
    );
  }
}
