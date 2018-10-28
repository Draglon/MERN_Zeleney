var React = require('react');

class SectionMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            subTitle: this.props.data.subTitle,
            button: this.props.data.button,
            items: this.props.data.items,

            popup: this.props.popup
        };
    }

    render() {
        return (
            <div className="wrapper">
                <ul className="list">
                    {
                        this.state.items.map(function(item, i){
                            return <li className="list_item" key={i}>{item}</li>
                        })
                    }
                </ul>
                <h1 className="title">{this.state.title}</h1>
                <h2 className="sub-title">{this.state.subTitle}</h2>
                <button className="btn btn-yellow btn-consultation" onClick={this.state.popup}>{this.state.button}</button>
            </div>
        );
    }
}

module.exports = SectionMain;