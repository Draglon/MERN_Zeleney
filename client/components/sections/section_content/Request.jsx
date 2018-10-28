import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../../store/selector.jsx';

class SectionRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            text: this.props.data.text,
            button: this.props.data.button
        };
    }

    popupToggle() {
        this.props.onPopupToggle();
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='request_title'>{this.state.title}</h2>
                <p className='request_text' dangerouslySetInnerHTML={{__html: this.state.text}}></p>
                <button className='btn btn-purple btn-request' onClick={this.popupToggle.bind(this)}>{this.state.button}</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        popupToggle: getPopupToggle(state),
    }),
    dispatch => ({
        onPopupToggle: () => {
            dispatch({type: 'POPUP_TOGGLE' });
        },
    })
)(SectionRequest);