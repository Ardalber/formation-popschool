class App extends React.Component {
    state = {
        name: "",
        message: "",
        comments: []
    }

    handleName =(event) => {
        console.log("name: " + event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleMessage = (event) => {
        console.log("message: "+ event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const comment = {
            name: this.state.name,
            message: this.state.message
        }
        console.log(comment);

        const tmp = this.state.comments.concat(comment);
        console.log(tmp);

        this.setState({
            comments: tmp
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Nom" 
                    value={this.state.name}
                    onChange={this.handleName}
                     />
                <textarea placeholder="message" 
                    value={this.state.message}
                    onChange={this.handleMessage}
                    ></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));