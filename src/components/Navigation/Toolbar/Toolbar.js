import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
        <div style={{height: "80%"}}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems authorised={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;