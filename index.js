
import React from 'react';
import ReactDOM from 'react-dom';

class Sky extends React.Component {
  constructor() {
    super();
    this.state = {color: "blue"};
  }
  render() {
    return <h3>The sky is {this.state.color}.</h3>;
  }
}

ReactDOM.render(<Sky />, document.getElementById('root'));
