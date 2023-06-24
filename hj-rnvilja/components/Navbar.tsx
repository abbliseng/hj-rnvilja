import styles from '../styles/Navbar.module.css'

import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.nav_item}>
            <a href="#" className={styles.icon_button} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <a href="#" className={styles.menu_item}>
                <span className={styles.icon_button}>{props.leftIcon}</span>
                {props.children}
                <span className={styles.icon_right}>{props.rightIcon}</span>
            </a>
        )
    }


    return (
        <div className={styles.dropdown}>
            <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu_primary">
                <div className={styles.menu}>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon="🦧"
                    ></DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu_secondary">
                <div className={styles.menu}>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon="🦧"
                    ></DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export { Navbar, NavItem, DropdownMenu }