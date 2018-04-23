const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const {createStore} = Redux
const store = createStore(todos)

console.log('store: ', store);
console.log('init: ', store.getState());

store.dispatch({
  type: 'ADD_TODO',
  text: 'Hello',
  id: 345678654
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Hello 2',
  id: 34567865444
})

store.dispatch({
  type: 'TOGGLE',
  id: 345678654
})
console.log('after toggle: ', store.getState());

// tests
// expect(store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Hello',
//   id: 345678654
// }))
