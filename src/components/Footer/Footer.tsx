import React, { Component } from "react";
import { connect } from "react-redux";

export class Footer extends Component<any, any> {
    render() {
        return (
            <div>
                We are in Footer -
                {this.props.isLoggedIn ? "Logged In" : "Not Logged In"}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    isLoggedIn: state.globals.isLoggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
