import React, { Component } from 'react';

class CommentList extends Component {
    constructor(props) {
        super();
    }

    render() {
        const comments = this.props.comments.map(comment => (
            <li>
                {comment.commentText}
            </li>
        ))
        return (
            <ul>
                {comments}
            </ul>
        )
    }
}

export default CommentList;
