<template>
<form v-on:submit.prevent="addTodoSubmit">
    <h1>Todo List</h1>
    <input type="text" v-model="todo">
    <button>Add</button>
    <button v-on:click.prevent="removeTodoClick">Clear Completed</button>
    <ul>
        <li v-for="todo in todos">
            <span
                v-bind:style="{ 'textDecoration': todo.done ? 'line-through' : 'none' }"
                v-on:click="toggleTodoClick(todo.id)">
                {{ todo.title }}
            </span>
        </li>
    </ul>
</form>
</template>

<script>
import {
    addTodo,
    removeTodo,
    toggleTodo,
    getTodoList
} from 'vuex/actions';

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
        },
        toggleTodoClick: function(id) {
            this.toggleTodo(id);
        },
        removeTodoClick: function() {
            this.removeTodo();
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
            removeTodo,
            toggleTodo,
            getTodoList
        }
    }
}
</script>

<style scoped>
</style>
