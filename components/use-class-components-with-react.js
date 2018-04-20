class Counter extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {count:0}
        this.handleClick = () =>{
            this.setState((state)=>({
                count: state.count + 1
            }))
        }
    }
    
    render() {
        return (<button onClick={this.handleClick}>{this.state.count}</button>)
    }
}

const element = <Counter/>
ReactDOM.render(element, document.getElementById('root'))