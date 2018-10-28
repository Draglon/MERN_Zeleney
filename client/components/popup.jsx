var React = require('react');
var Field = require('./form/Field.jsx');

class Popup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popup: this.props.popup,

            title: "Оставьте заявку",
            text: "и получите бесплатную консультацию по зеленым системам Zeleney",
            items: ['Тел: (067) 256-82-99', '(095) 555-14-32', 'info@zeleney.com'],

            form: [
                {
                    type: "text",
                    placeholder: "Имя",
                },
                {
                    type: "email",
                    placeholder: "Еmail*"
                },
                {
                    type: "tel",
                    placeholder: "Телефон*"
                },
                {
                    type: "textarea",
                    placeholder: "Комментарий"
                },
                {
                    type: "submit",
                    value: "Отправить"
                }
            ],
            errors: {
                email: "Укажите email",
                phone: "Укажите телефон"
            }
        };
    }

    render() {
        return (
            <div className="popup_wrap">
                <div className="popup">
                    <a className="popup_close" onClick={this.state.popup}></a>
                    <div className="popup_content">
                        <h2 className="popup_title">{this.state.title}</h2>
                        <p className="popup_text">{this.state.text}</p>

                        <ul className="popup_info">
                            {this.state.items.map( (item, i) => <li className="popup_info-item" key={i}>{item}</li> )}
                        </ul>

                        <form className="form form_request">
                            {this.state.form.map( (field, i) => <Field data={field} key={i} /> )}

                            <div className="form_errors">
                                <div className="form_errors-item">{this.state.errors.email}</div>
                                <div className="form_errors-item">{this.state.errors.phone}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Popup;