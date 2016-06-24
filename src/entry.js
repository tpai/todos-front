import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import Todos from 'components/Todos';
import store from 'vuex/store';

new Vue({
    el: 'body',
    store,
    components: {
        vue: Todos
    }
});
