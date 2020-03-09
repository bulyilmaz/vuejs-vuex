<template>
    <div>
        <p>{{ this.message }}</p>
        <p>{{ this.getMessage }}</p>
        <p>{{ this.wrapMessage("*") }}</p>
        <p><button @click="handleClick">click</button></p>
        <p><button @click="handleClick2">click 2</button></p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

    export default {
        name: "Hello",
        computed: {
            ...mapState(["message"]),
            ...mapGetters(["getMessage", "wrapMessage"])
        },
        methods: {
            ...mapMutations(["setMessage"]),
            ...mapActions(["setMessageAsync"]),
            handleClick() {
                this.setMessage({
                    message: "BBB"
                });
            },
            handleClick2() {
                this.setMessageAsync({
                    message: "DDD"
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