const rootElement = document.getElementById('root')
const Message = props => <div>{props.firstName} {props.secondName}</div>
const MessagePropTypes = {
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired
}
const props = {
    firstName: 'mike',
    secondName: 'shwk'
}
const element = (
    <Message {...props}/>
)

PropTypes.checkPropTypes(MessagePropTypes, props, 'prop', 'Message');

ReactDOM.render(element, rootElement)