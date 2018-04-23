#principles of redux
1. [STATE]all changes in app are contained in a single object === state, state tree
2. [DISPATCH]state tree is read only. to change the state => dispatch an action(object with changes)
3. [REDUSOR]to dicribe the state mutation => write a pure function(redusor) that takes the previous state, dispatched action and terurns next stateof app
#pure functions
no db calls, just calling new value, predicable, not changing value passed to them
#impure functions
may call db, may averwrite values to passed to them

#reduce composition
when one redusor can call another one. it is better to split reduser lodig to separeta for single risponsability approach