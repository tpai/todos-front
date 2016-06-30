import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todos: []
}

const mutations = {
    ADD_TODO (state, todo) {
        state.todos.push(todo);
    },
    REMOVE_TODO (state) {
        Object.assign(state, {
            todos: state.todos.filter(todo => !todo.done)
        });
    },
    TOGGLE_TODO (state, id) {
        Object.assign(state, {
            todos: state.todos.map((todo, index) => {
                if (index + 1 === id) {
                    return Object.assign({}, todo, {
                        done: !todo.done
                    });
                }
                return todo;
            })
        });
    },
    GET_TODO_LIST (state, todos) {
        state.todos = todos;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
