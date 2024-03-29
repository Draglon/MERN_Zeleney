import React, { Component } from 'react';

class Logo extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			logoUrl: this.props.data.urlLogo,
			logoAlt: 'Zeleney'
		};
	}

	render() {
		return (
			<div className='logo'><img className='logo_img' src={this.state.logoUrl} alt={this.state.logoAlt} /></div>
		);
	}
}

module.exports = Logo;