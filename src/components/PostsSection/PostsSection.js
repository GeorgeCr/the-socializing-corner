import React, { Component } from 'react';
import Post from "./Post/Post";

export default class PostsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.posts
        }
    }

    render() {
        return (
            // An iteration of <Post /> components
            <div>
                {
                    this.props.posts.map((post, postIndex) =>
                        <Post key={`p-${postIndex}`} postDetails={post} />
                    )
                }
            </div>
        )
    }
}