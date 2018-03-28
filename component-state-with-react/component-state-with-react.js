const StopWatch = () => {
    return (
        <div>
            <label>0ms</label>
            <button>start</button>
            <button>clear</button>
        </div>
    )
}
const element = <StopWatch/>
ReactDOM.render(element, document.getElementById('root'))