const state = {eventCount:0 , username: ''}
const App = () => {
  return (
    <div>
      <p>There have been {state.eventCount} events</p>
      <p><button onClick={incrementEventCount}>btn</button></p>
      <p>You typed: {state.username}</p>
      <p><input onChange={setUsername}/></p>
    </div>
  )
}

const incrementEventCount = () => {
  setState({eventCount: state.eventCount + 1})
}
const setState = (newState) => {
  Object.assign(state, newState)
  renderApp();
}
const renderApp = () => {
  ReactDOM.render(App(), document.getElementById('root'))
}
const setUsername = (event) => {
  setState({username: event.target.value})
}

renderApp()