var React = require('react');

class SectionBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: this.props.data.url,
            title: this.props.data.title,
            text: this.props.data.text,
            side: this.props.data.side
        };
    }

    render() {
        return (
            <div className={this.state.side === true ? "wrapper tile_container row-reverse" : "wrapper tile_container"}>
                <figure className="tile_figure">
                    <img src={this.state.url} alt={this.state.title} />
                </figure>
                <div className="tile_description">
                    <h2 className="tile_title">{this.state.title}</h2>
                    <p className="tile_text">{this.state.text}</p>
                </div>
            </div>
        );
    }
}

module.exports = SectionBlock;