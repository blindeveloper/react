const rootElement = document.getElementById('root')

const Box = (props) => ( 
    <div className= 'box'
        style= {{color: 'green'}}
        {...props}>
        Some content
    </div>)

const element = <Box style={{backgroundColor:"yellow"}}/>
ReactDOM.render(element, rootElement)
