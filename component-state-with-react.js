class StopWatch extends React.Component {
    constructor(){
        super();
        this.state = {lapse:0, isRunning:false}
        this.handleRunClick = () => {
            this.setState(state => {
                if (state.isRunning) {
                    clearInterval(this.timer)
                } else {
                    const startTime = Date.now() - this.state.lapse
                    this.timer = setInterval(()=>{
                        this.setState({
                            lapse: Date.now() - startTime, 
                        })
                    })
                }
                return {isRunning: !state.isRunning}
            })
        }
        this.handleClearClick = () => {
            clearInterval(this.timer)
            this.setState({lapse:0, isRunning:false})
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {lapse, isRunning} = this.state
        return (
            <div>
                <label>{lapse}ms</label>
                <button onClick={this.handleRunClick}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleClearClick}>clear</button>
            </div>
        )
    }
}

const element = <StopWatch/>
ReactDOM.render(element, document.getElementById('root'))