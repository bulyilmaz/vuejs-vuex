import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: "hello world"
    },
    getters: {
        getMessage: state => {
            return state.message;
        },
        getMessageUpperCase: (state, getters) => {
            return getters.getMessage.toUpperCase();
        },
        wrapMessage: (state, getters) => {
            return character => {
                return `${character}${getters.getMessage}${character}`;
            }
        }
    },
    mutations: {
        setMessage: (state, payload) => {
            state.message = payload.message;
        }
    },
    actions: {
        setMessageAsync: (context, payload) => {
            setTimeout(() => {
                context.commit("setMessage", {
                    message: payload.message
                });
            }, 1000);
        }
    }
});

export default store;