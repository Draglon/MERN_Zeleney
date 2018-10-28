var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navItems: [
                {route: "/", text: "Главная"},
                {route: "/green_wall", text: "Зеленая стена"},
                {route: "/phyto_picture", text: "Фитокартина"}
            ]
        };
    }

    render() {
        return (
            <nav className="main-menu" id="mainMenu">
                <ul className="main-menu_list">
                    {
                        this.state.navItems.map(function(item, i) {
                            return (
                                <li className="main-menu_item" key={i}>
                                    {item.route === '/' ?
                                        <NavLink className="main-menu_link" exact to={item.route} activeClassName="active">{item.text}</NavLink>
                                        :
                                        <NavLink className="main-menu_link" to={item.route} activeClassName="active">{item.text}</NavLink>
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }
}

module.exports = Navigation;