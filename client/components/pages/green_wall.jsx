var React = require('react');

var Section = require('../sections/Section.jsx');
const dataGreenWall = require('./data/dataGreenWall.jsx');

var Popup = require('../popup.jsx');

class GreenWall extends React.Component {

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
                {dataGreenWall.sections.map( (section, index) => <Section data={section} key={index} popup={this.togglePopup} /> ) }

                {this.state.showPopup ? <Popup popup={this.togglePopup} /> : null}
            </main>
        );
    }
}
 
module.exports = GreenWall;