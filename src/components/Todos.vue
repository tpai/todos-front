<template>
    <h1 class="title">Todo List</h1>
    <section class="section">
        <input
            type="text"
            v-model="todo"
            class="todo"
            placeholder="What needs to be done?"
            @keyup.enter.prevent="addTodoSubmit">
    </section>
    <ul class="todo-list">
        <li
            v-for="todo in todos"
            v-on:click="toggleTodoClick(todo)"
            class="todo-item">
            <span v-bind:style="{ 'textDecoration': todo.done ? 'line-through' : 'none' }">
                {{ todo.title }}
            </span>
        </li>
    </ul>
    <section v-show="todos.length > 0" class="section">
        <button type="button" class="button" @click.prevent="removeAllClick">Clear All</button>
        <button type="button" class="button" @click.prevent="removeCompletedClick">Clear Completed</button>
    </section>
</template>

<script>
import {
    addTodo,
    removeAll,
    removeCompleted,
    toggleTodo,
    getTodoList
} from 'vuex/actions';

export default {
    mounted() {
        this.getTodoList();
    },
    data() {
        return { todo: "" };
    },
    methods: {
        addTodoSubmit: function(e) {
            this.addTodo({
                title: this.todo,
                done: false
            });
            this.todo = "";
        },
        toggleTodoClick: function(todo) {
            this.toggleTodo(todo);
        },
        removeAllClick: function() {
            this.removeAll(this.$store.state.todos);
        },
        removeCompletedClick: function() {
            this.removeCompleted(this.$store.state.todos);
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
            removeAll,
            removeCompleted,
            toggleTodo,
            getTodoList
        }
    }
}
</script>

<style lang="sass">
@import url(https://fonts.googleapis.com/css?family=Exo+2:400,100,700);
body {
    font-family: 'Exo 2', sans-serif;
    background: #f5f5f5;
    max-width: 550px;
    margin: 0 auto;
}
.title {
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    margin: 0 0 20px 0;
    color: rgba(175, 47, 47, 0.15);
}
.section {
    display: flex;
    justify-content: center;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.todo {
    font-family: 'Exo 2', sans-serif;
    font-size: 24px;
    line-height: 1.4em;
    width: 100%;
    padding: 16px;
    outline: none;
    border: 1px solid #e5e5e5;
    background: white;
}
.todo-list {
    list-style: none;
    padding-left: 0px;
    margin: 0px;
}
.todo-item {
    @extend .todo;
    width: auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.button {
    border: 0;
    margin: 5px 0 5px 0;
    outline: none;
    background: white;
    font-family: 'Exo 2';
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
</style>
