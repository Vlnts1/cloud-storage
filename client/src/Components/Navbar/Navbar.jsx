import React from "react";
import {Navbar,Container, Nav} from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

export default function Header() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return(
    <Navbar>
        <Container>
            <Navbar.Brand href="/">Cloud</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
               {!isAuth && <Nav.Link href="/login">Войти </Nav.Link>}
               {!isAuth && <Nav.Link href="/registration">Регистрация</Nav.Link>}
               {isAuth && <Nav.Link onClick={() => dispatch(logout())}>Выйти</Nav.Link>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}