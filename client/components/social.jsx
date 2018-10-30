import React, { Component } from 'react';

class SocialLinks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    icon: 'icon-facebook',
                    link: 'https://www.facebook.com/zeleney.studio/'
                },
                {
                    icon: 'icon-instagram',
                    link: 'http://instagram.com/zeleney.studio'
                }
            ]
        };
    }

    render() {
        return (
            <div className='social'>
                {
                    this.state.links.map(function(socialLink, i) {
                        return <a className={'social_link ' + socialLink.icon} href={socialLink.link} key={i}></a>
                    })
                }
            </div>
        );
    }
}

module.exports = SocialLinks;