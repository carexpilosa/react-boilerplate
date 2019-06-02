import React from 'react';
import Sub from './Sub';

class Super extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textlength: 0
    };
  }

  render() {
    console.log('render SUPER');
    return (
      <div>
        <h3>Super</h3>
        <Sub
          onInputChange={this._subOnInputChange.bind(this)}
          counter={this.state.textlength}
        />
        <img src={require('./files/buche.jpeg')} alt='Buche' />
        <div>{this.state.text}</div>
      </div>
    );
  }

  _subOnInputChange(e) {
    console.log('_subOnInputChange', e.target.value);
    this.setState({
      text: e.target.value,
      textlength: e.target.value.length
    });
  }
}

export default Super;
