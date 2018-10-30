import React, { Component } from 'react';

class SectionHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data
        };
    }

    render() {
        return (
            <header className='section_header'>
                <h1 className='section_header-title' dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
            </header>
        );
    }
}

module.exports = SectionHeader;