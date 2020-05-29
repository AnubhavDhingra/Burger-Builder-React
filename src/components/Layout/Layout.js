import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    // sideDrawerOpenHandler = () => {

    // }


    render () {
        return (
            <Aux>
            <Toolbar></Toolbar>
            <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}
export default Layout;