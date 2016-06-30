import fetch from "isomorphic-fetch";

export const addTodo = ({ dispatch }, todo) => {
    dispatch('ADD_TODO', todo);
}

export const removeTodo = ({ dispatch }) => {
    dispatch('REMOVE_TODO');
}

export const toggleTodo = ({ dispatch }, id) => {
    dispatch('TOGGLE_TODO', id);
}

export const getTodoList = ({ dispatch }) => {
    (async () => {
        const res = await fetch(`${__API_ADDRESS__}/tasks`);
        if (res.status === 200) {
            const json = await res.json();
            dispatch('GET_TODO_LIST', json);
        }
        else {
            dispatch('GET_TODO_LIST', [
                { id: 1, title: "TODO A", done: false },
                { id: 2, title: "TODO B", done: false },
                { id: 3, title: "TODO C", done: false }
            ]);
        }
    })();
}
