import fetch from "isomorphic-fetch";

export const addTodo = ({ dispatch }, todo) => {
    (async () => {
        const res = await fetch(`${__API_ADDRESS__}/tasks`, fetchOpts('POST', todo));
        res.status >= 200 && getTodoList({ dispatch });
    })();
}

export const removeAll = ({ dispatch }, todos) => {
    const req = todos.map(todo => {
        (async () => {
            const res = await fetch(`${__API_ADDRESS__}/tasks/${todo.id}`, fetchOpts('DELETE'));
            res.status >= 200 && getTodoList({ dispatch });
        })();
    });
}

export const removeCompleted = ({ dispatch }, todos) => {
    const req = todos.map(todo => {
        todo.done && (async () => {
            const res = await fetch(`${__API_ADDRESS__}/tasks/${todo.id}`, fetchOpts('DELETE'));
            res.status >= 200 && getTodoList({ dispatch });
        })();
    });
}

export const toggleTodo = ({ dispatch }, todo) => {
    (async () => {
        const req = Object.assign({}, todo, { done: !todo.done });
        const res = await fetch(`${__API_ADDRESS__}/tasks/${req.id}`, fetchOpts('PUT', req));
        res.status >= 200 && getTodoList({ dispatch });
    })();
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
                { title: "TODO A", done: false },
                { title: "TODO B", done: false },
                { title: "TODO C", done: false }
            ]);
        }
    })();
}

export const fetchOpts = (method, req) => {
    return {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }
}
