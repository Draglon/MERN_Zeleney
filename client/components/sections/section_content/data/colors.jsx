var React = require('react');

class Colors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: this.props.dataColors
        };
    }

    render() {
        return (
            <div className="details_colors">
                {
                    this.state.colors.map(function(color, j) {
                        return (
                            <div className="details_color" key={j} style={{backgroundColor: color}}></div>
                        );
                    })
                }
            </div>
        );
    }
}

module.exports = Colors;