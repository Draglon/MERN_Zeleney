var React = require('react');

class SectionInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subTitle: this.props.data.subTitle,
            items: this.props.data.items
        };
    }

    render() {
        return (
            <div className="info_content">
                <div className="wrapper">
                    <h2 className="info_title">{this.state.subTitle}</h2>
                    <ul className="info_list">
                        {
                            this.state.items.map(function(item, i){
                                return <li className="info_item" key={i}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = SectionInfo;