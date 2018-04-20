//redusor
const counterRedusor = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const Counter = ({
  value,
  onIncrement,
  onDicrement
}) => (
  <div>
    <h2>{value}</h2>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDicrement}>-</button>
  </div>
)

const { createStore } = Redux
const store = createStore(counterRedusor)
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
            onIncrement={()=>store.dispatch({type:'INCREMENT'})}
            onDicrement={()=>store.dispatch({type:'DECREMENT'})}/>,
    document.getElementById('root')
  )
}

store.subscribe(() => render())
render()