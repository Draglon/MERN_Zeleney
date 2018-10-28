var React = require('react');

class SectionSimpleCare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            text: this.props.data.text,
            url: this.props.data.url,
            items: this.props.data.items
        };
    }

    render() {
        return (
            <div className="wrapper">
                <header className="simple-care_header">
                    <h2 className="simple-care_title">{this.state.title}</h2>
                    <p className="simple-care_text">{this.state.text}</p>
                </header>
                <figure className="simple-care_figure">
                    <img src={this.state.url} />
                </figure>
                <div className="simple-care_items">
                    {
                        this.state.items.map(function(item, i) {
                            return (
                                <div className="simple-care_item" key={i}>
                                    <h2 className="simple-care_item-title" dangerouslySetInnerHTML={{__html: item.title}}></h2>
                                    <p className="simple-care_item-text">{item.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

module.exports = SectionSimpleCare;