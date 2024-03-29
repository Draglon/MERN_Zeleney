import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phones extends Component {
  constructor(props) {
      super(props);

      this.state = { 
        classPhones: this.props.data.classIcon ? 'phones ' + this.props.data.classIcon : 'phones',
        phones: [
          '(067) 256-82-99',
          '(095) 555-14-32'
        ]
      };
    }

  render() {
    return (
      <div className={this.state.classPhones}>
        {
          this.state.phones.map(function(phone){
            return <div className='phones_item' key={phone}>{phone}</div>
          })
        }
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Phones);