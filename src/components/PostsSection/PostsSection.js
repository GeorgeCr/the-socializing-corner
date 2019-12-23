import React, { Component } from 'react';
import Post from "./Post/Post";

export default class PostsSection extends Component {
    render() {
        return (
            // An iteration of <Post /> components
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}