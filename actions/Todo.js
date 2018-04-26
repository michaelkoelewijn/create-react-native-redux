export function clearTodo() {
    return {
        type: 'CLEAR_TODO'
    }
}

export function fetchTodos() {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            dispatch({
                type: 'FETCH_TODOS',
                payload: response
            })
        })
    }
}

export function fetchTodo(id) {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            setTimeout(() => {
                dispatch({
                    type: 'FETCH_TODO',
                    payload: response
                })
            }, 500)
        })
    }
}