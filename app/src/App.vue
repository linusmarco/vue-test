<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <h2>Components</h2>
        <p><a href="javascript:void(0)" v-on:click="switchComponent(1)">Component 1</a></p>
        <p><a href="javascript:void(0)" v-on:click="switchComponent(2)">Component 2</a></p>
        <p><a href="javascript:void(0)" v-on:click="switchComponent(3)">Component 3</a></p>

        <component1 v-if="activeComponent === 1"></component1>
        <component2 v-if="activeComponent === 2"></component2>
        <component3 v-if="activeComponent === 3"></component3>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            activeComponent: 1
        }
    },
    methods: {
        switchComponent: function(n) {
            this.activeComponent = n;
            console.log("showing component " + this.activeComponent);
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
