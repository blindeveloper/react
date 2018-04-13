class NameForm extends React.Component {
    constructor (...args) {
        super(...args)
        this.state = {error: this.props.getErrorMessage('')}
        this.handleSubmit = event => {
            event.preventDefault()
            const value = event.target.elements.username.value
            const error = this.props.getErrorMessage(value)

            if (error) {
                alert(`error: ${error}`)
            } else {
                alert(`success: ${value}`)
            }
        }

        this.handleChange = event => {
            const {value} = event.target
            this.setState({
                error: this.props.getErrorMessage(value)
            })
        }
    }
    
    render() {
        const {error} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" 
                    name="username"
                    onChange={this.handleChange}
                    ref={node => (this.inputNode = node)}/>
                </label>
                {error ? <div style={{color:'red'}}>{error}</div> : null}
                <button type="submit" disabled={Boolean(error)}>Submit</button>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm 
        getErrorMessage={value => {
            if(value.length < 3) {
                return `Value must be at least 3 chars, but it is only ${value.length}`
            }
            return null
        }}/>,
    document.getElementById('root')
)