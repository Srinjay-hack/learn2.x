import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './navbarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/dashboard' activeStyle>
                        DashBoard
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to='/reviews' activeStyle>
                        Reviews
                    </NavLink>
                    <NavLink to='/community' activeStyle>
                        Community
                    </NavLink>
                    <NavLink to='/courses' activeStyle>
                        Courses
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
