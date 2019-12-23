import React, { Component } from 'react';
import { IconButton } from "@material-ui/core";
import { Face } from "@material-ui/icons";

export default class ProfileButton extends Component {
    render() {
        return (
            <IconButton
                aria-label="profile"
            >
                <Face />
            </IconButton>
        )
    }
}