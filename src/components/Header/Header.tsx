import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../lib/redux/reducers/globals";

export class Header extends Component<any, any> {
    render() {
        return (
            <div>
                We are in Header -{" "}
                {this.props.isLoggedIn ? "Logged In" : "Not Logged In"}
                {this.props.isLoggedIn ? (
                    <button onClick={this.props.logout}>Logout</button>
                ) : (
                    <button onClick={this.props.login}>Login</button>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    isLoggedIn: state.globals.isLoggedIn,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (payload: any) => dispatch(login(payload)),
        logout: (payload: any) => dispatch(logout(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
