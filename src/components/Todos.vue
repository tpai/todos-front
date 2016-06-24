<template>
<form v-on:submit.prevent="addTodoSubmit">
    <h1>Todo List</h1>
    <input type="text" v-model="todo"> <button>Add</button>
    <ul>
        <li v-for="todo in todos">{{ todo.title }}</li>
    </ul>
</form>
</template>

<script>
import { addTodo, getTodoList } from 'vuex/actions';

export default {
    ready() {
        this.getTodoList();
    },
    data() {
        return {
            todo: ""
        };
    },
    methods: {
        addTodoSubmit: function(e) {
            this.addTodo({
                title: this.todo
            });
            this.todo = "";
        }
    },
    vuex: {
        getters: {
            todos: function (state) {
                return state.todos;
            }
        },
        actions: {
            addTodo,
            getTodoList
        }
    }
}
</script>

<style scoped>
</style>
