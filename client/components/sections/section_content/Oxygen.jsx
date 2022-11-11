import React, { Component } from 'react';

class SectionOxygen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.data.title,
      text: this.props.data.text
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <h2 className='oxygen_title'>{this.state.title}</h2>
        <p className='oxygen_text'>{this.state.text}</p>
      </div>
    );
  }
}

module.exports = SectionOxygen;