import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../store/selector.jsx';

const Section = require('../sections/Section.jsx');
const dataGreenWall = require('./data/dataGreenWall.jsx');
const Popup = require('../popup.jsx');

class GreenWall extends Component {
  render() {
    const { popupToggle } = this.props;

    return (
      <main className='main'>
        {dataGreenWall.sections.map( (section, index) => <Section data={section} key={index} /> ) }

        {popupToggle ? <Popup /> : null}
      </main>
    );
  }
}

export default connect(
  state => ({
    popupToggle: getPopupToggle(state),
  }),
  dispatch => ({})
)(GreenWall);