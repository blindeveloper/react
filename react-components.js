const rootElement = document.getElementById('root')
const Message = props => <div>{props.msg}</div>
const element = (
    <div className="container">
        <Message msg="Hello react"/>
        <Message msg="From here"/>
    </div>
)

ReactDOM.render(element, rootElement)