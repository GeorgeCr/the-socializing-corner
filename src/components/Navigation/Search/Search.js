import React, { Component } from 'react';
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends Component {
    render() {
        return (
            <TextField
                onChange={(event) => this.props.passSearchTerm(event.currentTarget.value)}
                className="search-mobile"
                placeholder="Search for posts, people..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        )
    }
}