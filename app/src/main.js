import Vue from 'vue';
import App from './App.vue';

Vue.component('component1', () => import('./component1.vue'));
Vue.component('component2', () => import('./component2.vue'));
Vue.component('component3', () => import('./component3.vue'));

new Vue({
    el: '#app',
    render: h => h(App)
})
