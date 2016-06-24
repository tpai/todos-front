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
    GET_TODO_LIST (state, todos) {
        state.todos = todos;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
