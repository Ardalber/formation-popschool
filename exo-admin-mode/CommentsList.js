import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {
    state = {
        comments: 
        [  
            { 
                name: "salsifi", 
                message: "miam salsifi!!"
            },
            { 
                name: "JB", 
                message: "Youhou la famille!"
            },
            { 
                name: "Kirikou", 
                message: "Je ne suis pas grand mais je suis vaillant"
            }
        ]            
    }

    render() {
        const commentsJSX = this.state.comments.map(comment => {
            return <Comment name={comment.name} message={comment.message} />
        })

        return (
            <div>
                <h2 className="title">Liste des commentaires</h2>
                {commentsJSX}
            </div>
        )

        /* commentsJSX
            Il va venir récupérer this.state.comments
            Pour chaque valeur il va venir le transformer
             { 
                name: "JB", 
                message: "Youhou la famille!"
            },  -> <Comment name="JB" message="Youhou la famille!"

            { 
                name: "Kirikou", 
                message: "Je ne suis pas grand mais je suis vaillant"
            } -> <Comment name="Kirikou" message="Je ne suis ..." />

            commentsJSX -> [ <Comment name="JB" message="Youhou la famille!",
              <Comment name="Kirikou" message="Je ne suis pas..." />]
        
            ----

              Dans le render,
              <Comment name="JB" message="Youhou la famille!"/>
              <Comment name="Kirikou" message="Je ne suis pas..." />

            ----
              Et ça, ça va se transformer finalement en ça
            <div className="comment">
                <strong>JB</strong>
                <p>Youhou la famille</p>
            </div>
            <div className="comment">
                <strong>Kirikou</strong>
                <p>Je ne suis pas....</p>
            </div>
        ]
        */
    }
}


