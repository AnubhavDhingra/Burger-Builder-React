import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.authorised ? <NavigationItem link="/orders">Orders</NavigationItem>: null }
        {props.authorised ? <NavigationItem link="/logout">Logout</NavigationItem>:
        <NavigationItem link="/auth">Authorization</NavigationItem>}
    </ul>
);

export default navigationItems;