
const rootElement = document.getElementById('root')
const props = {
    className: 'container',
    children: 'Hello react'
}
const element = <div {...props}/>
ReactDOM.render(element, rootElement)
