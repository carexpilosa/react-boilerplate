import React from 'react';

import Super from './Super';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }

  render() {
    console.log('render SUB');
    return (
      <div>
        <h3>Sub</h3>
        <input type="text" onChange={this.props.onInputChange} />
        <div>{ this.props.counter }</div>
      </div>
    );
  }
}

export default Sub;