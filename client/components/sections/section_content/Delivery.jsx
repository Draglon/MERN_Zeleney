var React = require('react');
var Delivery = require('./data/delivery-item.jsx');

class SectionDelivery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            delivery: this.props.data.delivery
        };
    }

    render() {
        return (
                <div className="wrapper">
                    <Delivery data={this.state.delivery} />
                </div>
        );
    }
}

module.exports = SectionDelivery;