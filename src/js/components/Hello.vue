<template>
    <div>
        <p>{{ this.$store.state.message }}</p>
        <p>{{ this.$store.getters.getMessageUpperCase }}</p>
        <p><button @click="handleClick">click</button></p>
        <p><button @click="handleClick2">click 2</button></p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        methods: {
            handleClick() {
                this.$store.commit("setMessage", {
                    message: "AAA"
                });
            },
            handleClick2() {
                this.$store.dispatch("setMessageAsync", {
                    message: "CCC"
                });
            }
        },
        data() {
            return {
                text: "hello"
            };
        }
    };
</script>