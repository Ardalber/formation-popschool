import React, { Component } from 'react'

export default class CommentForm extends Component {

   
    render() {
        return (
            <form className="commentform">
                <h2 className="title">Ajouter un commentaire</h2>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Your name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Your comment">
                        </textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Envoyer</button>
                    </div>
                </div>
            </form>
        )
    }
}
