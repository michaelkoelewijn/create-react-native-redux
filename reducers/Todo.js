const initialState = { 
    items: [],
    item: {}
}

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TODOS':
        return {
          ...state,
          items: action.payload
        }
      case 'FETCH_TODO':
        return {
          ...state,
          item: action.payload
        }  
      case 'CLEAR_TODO':
        return {
          ...state,
          item: []
        }  
      default:
        return state;
    }
}