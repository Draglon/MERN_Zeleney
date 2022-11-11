import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopupToggle } from '../../../store/selector.jsx';

class SectionOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainBG: 'url(' + this.props.data.mainBG + ')',
      title: this.props.data.title,
      subTitle: this.props.data.subTitle,
      items: this.props.data.items,
      button: this.props.data.button
    };
  }

    popupToggle() {
      this.props.onPopupToggle();
    }

    render() {
      return (
        <div className='wrapper'>
          <div className='order_sidebar'>
            <h2 className='order_title'>{this.state.title}</h2>

            <p className='order_subtitle' dangerouslySetInnerHTML={{__html: this.state.subTitle}}></p>

            <ul className='order_list'>
              {
                this.state.items.map(function(item, i) {
                  return <li className='order_item' key={i}>{item}</li>
                })
              }
            </ul>

            <button className='btn btn-purple order_btn' onClick={this.popupToggle.bind(this)}>{this.state.button}</button>
        </div>
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
)(SectionOrder);