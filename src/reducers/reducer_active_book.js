//state here is not app state, only state
//this reduces is responsible for, reducers need state and action
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
