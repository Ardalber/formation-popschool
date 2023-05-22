import React, { Component } from 'react'
import "./Comment.scss"

export default class Comment extends Component {

    state = {
        isRed: false
    }

    render() {
        const classComment = this.state.isRed ? "comment comment--red" : "comment"

        return (
            <div className={classComment}>
                <strong>{this.props.name}</strong>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
