import React, { Component } from 'react';

class SingleInput extends Component {
    constructor(props) {
      super(props);

      this.state = {
        inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
        title: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        controlFunc: React.PropTypes.func.isRequired,
        content: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
        ]).isRequired,
        placeholder: React.PropTypes.string
      };
    }

  render() {
    return (
      <div className="form-group">
        <label className="form-label">{props.title}</label>
        <input
          className="form-input"
          name={props.name}
          type={props.inputType}
          value={props.content}
          onChange={props.controlFunc}
          placeholder={props.placeholder} />
      </div>
    );
  }
}

module.exports = SingleInput;