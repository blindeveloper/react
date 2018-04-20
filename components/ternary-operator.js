const rootElement = document.getElementById('root')
const MessageComponent = props => (
    props.msg ? <h2>{props.msg}</h2> : <h2>no</h2>
)

const props = {
    msg:'Lorem...'
}
const element = <MessageComponent {...props}/>

ReactDOM.render(element, rootElement)
