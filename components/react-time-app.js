const rootElement = document.getElementById('root')
const bootElement = document.getElementById('boot')

const getTime = () => {
    let currentTime = new Date().toLocaleTimeString()
    const element = (
        <div>
            <input value={currentTime}/>
            <input value={currentTime}/>
        </div>)
    ReactDOM.render(element, rootElement)
}

setInterval(()=>getTime(), 1000)

const elementBoot = <div>'niceee'</div>
ReactDOM.render(elementBoot, bootElement)