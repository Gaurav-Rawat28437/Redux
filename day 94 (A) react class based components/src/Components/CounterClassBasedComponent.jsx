import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated from");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return (
      <div>
        <h1>Counter is {this.state.counter}</h1>

        <button
          onClick={() =>
            this.setState({ counter: this.state.counter + 1 })
          }
        >
          Increment
        </button>

        <button
          onClick={() => this.setState({ counter: 0 })}
        >
          Reset
        </button>

        <button
          onClick={() =>
            this.setState({ counter: this.state.counter - 1 })
          }
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;