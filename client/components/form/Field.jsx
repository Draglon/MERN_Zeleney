var React = require('react');

class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            field: this.props.data
        }
    }

    render() {
        return (
            <div className="form_field">
                {(this.state.field.type == "text" || this.state.field.type == "email" || this.state.field.type == "tel") ? 
                    <input type={this.state.field.type} placeholder={this.state.field.placeholder} /> 
                : null}

                {this.state.field.type == "textarea" ? 
                    <textarea placeholder={this.state.field.placeholder}></textarea> 
                : null}

                {this.state.field.type == "submit" ? 
                    <button className="btn btn-purple" type={this.state.field.type}>{this.state.field.value}</button> 
                : null}
            </div>
        );
    }
}

module.exports = Field;