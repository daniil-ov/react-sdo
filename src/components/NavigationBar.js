import React from 'react';
import {Link} from "react-router-dom";
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";

class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const {isAuthenticated} = this.props.auth;


        const userLinks = (


            <Nav>
                <NavDropdown
                    title={this.props.auth.user.third_name + " "
                    + this.props.auth.user.name + " "
                    + this.props.auth.user.second_name}
                    id="basic-nav-dropdown">
                    <NavDropdown.Item href={"/lk/teacher_course"}>Личный кабинет</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#" onClick={this.logout.bind(this)}>Выйти</NavDropdown.Item>
                </NavDropdown>


            </Nav>


        );

        const guestLinks = (
            <Nav>
                <Nav.Link href="/signup">Зарегистрироваться</Nav.Link>
                <Nav.Link href="/login">Войти</Nav.Link>
            </Nav>
        );

        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href={"/"}>SUT SDO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    {isAuthenticated ? userLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar);