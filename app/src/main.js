import Vue from 'vue';
import App from './App.vue';
import component1 from './component1.vue';
import component2 from './component2.vue';
import component3 from './component3.vue';

Vue.component('component1', component1);
Vue.component('component2', component2);
Vue.component('component3', component3);

new Vue({
    el: '#app',
    render: h => h(App)
})
