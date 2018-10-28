import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../store/selector.jsx';

const Section = require('../sections/Section.jsx');
const dataHome = require('./data/dataHome.jsx');
const Popup = require('../popup.jsx');

class Home extends Component {
    render() {
        const { popupToggle } = this.props;

        return (
            <main className='main'>
                {dataHome.sections.map( (section, index) => <Section data={section} key={index} /> ) }

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
)(Home);