import React from 'react';
import ReactDOM from 'react-dom';

class AngularJS extends React.Component {
  render() {
    return <h3>AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.</h3>;
  }
}

class JavaScript extends React.Component {
  render() {
    return (
      <div>
      <h2>AngularJS is a JavaScript framework.</h2>
      <AngularJS />
      </div>
    );
  }
}

ReactDOM.render(<JavaScript />, document.getElementById('root'));
