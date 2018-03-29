class NameForm extends React.Component {
    constructor (...args) {
        super(...args)
        this.handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.inputNode.value);
            console.log(event.target.elements.username.value)
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" 
                    name="username"
                    ref={node => (this.inputNode = node)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
)