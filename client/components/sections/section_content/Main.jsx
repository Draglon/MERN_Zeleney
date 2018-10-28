import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../../store/selector.jsx';

class SectionMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            subTitle: this.props.data.subTitle,
            button: this.props.data.button,
            items: this.props.data.items,
        };
    }
    
    popupToggle() {
        this.props.onPopupToggle();
    }

    render() {
        return (
            <div className='wrapper'>
                <ul className='list'>
                    {
                        this.state.items.map(function(item, i){
                            return <li className='list_item' key={i}>{item}</li>
                        })
                    }
                </ul>
                <h1 className='title'>{this.state.title}</h1>
                <h2 className='sub-title'>{this.state.subTitle}</h2>
                <button className='btn btn-yellow btn-consultation' onClick={this.popupToggle.bind(this)}>{this.state.button}</button>
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
)(SectionMain);