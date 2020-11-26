import React from 'react';
import ReactDOM from 'react-dom';

class Reactdescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "React is ..."
    };
  }
  changeInfo = () => {
    this.setState({info: "React is a JavaScript library for building user interfaces."});
  }
  render() {
    return (
      <div>
        <p>
          {this.state.info}
        </p>
        <button
          type="button"
          onClick={this.changeInfo}
        >more info</button>
      </div>
    );
  }
}

ReactDOM.render(<Reactdescription />, document.getElementById('root'));


