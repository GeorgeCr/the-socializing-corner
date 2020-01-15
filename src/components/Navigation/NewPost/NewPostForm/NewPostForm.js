import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import './NewPostForm.css';

export default class NewPostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postTitle: "",
            postContent: "",
            userName: "",
            postImageUrl: "",
            postImageTitle: "",
            date: ""
        }
    }

    onTitleChange = event => {
        let currentState = {...this.state};
        const postTitle = event.currentTarget.value;
        currentState.postTitle = postTitle;
        console.log(currentState, 'current')
        this.setState({ currentState });
    }

    onContentChange = event => {
        let currentState = {...this.state};
        const postContent = event.currentTarget.value;
        currentState.postContent = postContent;
        this.setState({ currentState });
    }

    onUserNameChange = event => {
        let currentState = {...this.state};
        const userName = event.currentTarget.value;
        currentState.userName = userName;
        this.setState({ currentState });
    }

    onImageTitleChange = event => {
        let currentState = {...this.state};
        const imageTitle = event.currentTarget.value;
        currentState.imageTitle = imageTitle;
        this.setState({ currentState });
    }

    onImageUrlChange = event => {
        let currentState = {...this.state};
        const imageUrl = event.currentTarget.value;
        currentState.imageUrl = imageUrl;
        this.setState({ currentState });
    }

    onDateChange = event => {
        let currentState = {...this.state};
        const date = event.currentTarget.value;
        console.log(date)
        currentState.date = date;
        this.setState({ currentState });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-half">
                    <div>
                        <TextField onChange={(event) => this.onTitleChange(event)} id="standard-uncontrolled" label="Title" />
                    </div>
                    <div>
                        <TextField onChange={(event) => this.onContentChange(event)} multiline id="standard-uncontrolled" label="Content" />
                    </div>
                    <div>
                        <TextField onChange={(event) => this.onUserNameChange(event)} id="standard-uncontrolled" label="Your name" />

                    </div>
                </div>
                <div className="form-half">
                    <div>
                        <TextField onChange={(event) =>  this.onImageTitleChange(event)} id="standard-uncontrolled" label="Image Title"  />
                    </div>
                    <div>
                        <TextField onChange={(event) => this.onImageUrlChange} id="standard-uncontrolled" label="Image URL" />
                    </div>
                    <div>
                        <TextField onChange={(event) => this.onDateChange}id="standard-uncontrolled" label="Date" />
                    </div>
                </div>
            </div>
         );
    }
}