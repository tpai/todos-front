import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todos: []
}

const mutations = {
    // ADD_TODO (state, todo) {
    //     state.todos.push(todo);
    // },
    // REMOVE_TODO (state) {
    //     Object.assign(state, {
    //         todos: state.todos.filter(todo => !todo.done)
    //     });
    // },
    // TOGGLE_TODO (state, action) {
    //     Object.assign(state, {
    //         todos: state.todos.map(todo => {
    //             if (todo.id === action.id) {
    //                 return Object.assign({}, todo, action);
    //             }
    //             return todo;
    //         })
    //     });
    // },
    GET_TODO_LIST (state, todos) {
        state.todos = todos;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
