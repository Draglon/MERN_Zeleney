var React = require('react');

class Delivery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: this.props.data
        };
    }

    render() {
        return (
            <div className="delivery_items">
                {this.state.items.map((item, i) => 
                    <div className="delivery_item" key={i}>
                        <h2 className="delivery_item-title">{item.title}</h2>
                        <p className="delivery_item-text" dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </div>
                )}
            </div>
        );
    }
}

module.exports = Delivery;