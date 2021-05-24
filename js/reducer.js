let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count
} 

function dispatch(action) {
  state = changeState(state, action)
  render()
  // return state
}

document.addEventListener('click', e => {
  dispatch({type: 'INCREASE_COUNT'})
  // render()
  console.log(e.target.children[1].textContent)
})

// let action = {type: 'INCREASE_COUNT'}
// state = changeState(state, action)

// render()

// dispatch({type: 'INCREASE_COUNT'})
// console.log(state)
// dispatch({type: 'INCREASE_COUNT'})
// console.log(state)
// dispatch({type: 'INCREASE_COUNT'})
// console.log(state)

// render()
