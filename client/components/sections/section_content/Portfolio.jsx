var React = require('react');
var Slider = require('./data/slider.jsx');

class SectionPortfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slider: this.props.data.slider
        };
    }

    render() {
        return (
            <div className='portfolio_content'>
                <Slider data={this.state.slider} />
            </div>
        );
    }
}

module.exports = SectionPortfolio;