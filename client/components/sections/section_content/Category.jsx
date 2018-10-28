var React = require('react');
import {NavLink} from 'react-router-dom';

class SectionCategory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: this.props.data.categories
        };
    }

    render() {
        return (
            <div>
                {this.state.categories.map((category, i) =>
                    <div className="category_item" key={i}>
                        <div className="wrapper">
                            <NavLink className="category_figure" to={category.route} data-imglabel={category.imgLabel}><img src={category.imgUrl} /></NavLink>
                            <div className="category_sidebar">
                                <div className="category_sidebar-content">
                                    <div className="category_sidebar-label" dangerouslySetInnerHTML={{__html: category.label}}></div>
                                    <div className="category_sidebar-title">
                                        <h2>{category.title}</h2>
                                        <span>{category.subTitle}</span>
                                    </div>
                                    <div className="category_sidebar-button"><NavLink className="btn btn-blue btn-more" to={category.route}>{category.button}</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

module.exports = SectionCategory;