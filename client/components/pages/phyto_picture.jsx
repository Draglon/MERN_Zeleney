import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../store/selector.jsx';

const Section = require('../sections/Section.jsx');
const dataPhytoPicture = require('./data/dataPhytoPicture.jsx');
const Popup = require('../popup.jsx');

class PhytoPicture extends Component {
    render() {
        const { popupToggle } = this.props;

        return (
            <main className='main'>
                {dataPhytoPicture.sections.map( (section, index) => <Section data={section} key={index} /> ) }

                {popupToggle ? <Popup /> : null}
            </main>
        );
    }
}

export default connect(
    state => ({
        popupToggle: getPopupToggle(state),
    }),
    dispatch => ({
        
    })
)(PhytoPicture);