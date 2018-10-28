var React = require('react');

var Section = require('../sections/Section.jsx');
const dataPhytoPicture = require('./data/dataPhytoPicture.jsx');

var Popup = require('../popup.jsx');

class PhytoPicture extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showPopup: false};

        this.togglePopup = () => {
            this.setState({showPopup: !this.state.showPopup});
        }
    }

    render() {
        return (
            <main className="main">
                {dataPhytoPicture.sections.map( (section, index) => <Section data={section} key={index} popup={this.togglePopup} /> ) }
                
                {this.state.showPopup ? <Popup popup={this.togglePopup} /> : null}
            </main>
        );
    }
}
 
module.exports = PhytoPicture;