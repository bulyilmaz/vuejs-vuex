import Vue from "vue";
import "es6-promise/auto";

import store from "./store/index.js";

import Hello from "./components/Hello.vue";
import Hello2 from "./components/Hello2.vue";

import "../css/style.scss";

new Vue({
    el: "#container",
    store,
    components: {
        Hello,
        Hello2
    },
    template: `
        <div>
            <p>{{ this.$store.state.message }}</p>
            <Hello/>
            <Hello2/>
        </div>
    `
});