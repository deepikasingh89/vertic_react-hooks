import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incr = () => {
    this.setState((state)=> ({ count: state.count + 1 }));
  };
  render() {
    return <div>
        <p>toy clicked {this.state.count}</p>
        <button onClick={this.incr}>incr</button>
    </div>;
  }
}
