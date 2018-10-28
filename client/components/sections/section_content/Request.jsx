var React = require('react');

class SectionRequest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            text: this.props.data.text,
            button: this.props.data.button,

            popup: this.props.popup
        };
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="request_title">{this.state.title}</h2>
                <p className="request_text" dangerouslySetInnerHTML={{__html: this.state.text}}></p>
                <button className="btn btn-purple btn-request" onClick={this.state.popup}>{this.state.button}</button>
            </div>
        );
    }
}

module.exports = SectionRequest;