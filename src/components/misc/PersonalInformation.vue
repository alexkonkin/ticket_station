<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">Personal information:</h3>
        </div>
        <div class="panel-body">
            <div class="form">
                <div class="form-group   col-lg-6">
                    <label for="userName">Name</label>
                    <input type="text" class="form-control" id="userName" :value="name" @change="setUN">
                </div>
                <div class="form-group col-lg-6">
                    <label for="userEmail">Email address</label>
                    <input type="email" class="form-control" id="userEmail" placeholder="email@example.com" :value="email" @change="setUE">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        methods: {
            setUN: function(e){
                this.$store.dispatch('addUserName', e.target.value);
            },
            setUE: function(e){
                this.$store.dispatch('addUserEmail', e.target.value);
            }
        },
        computed: {
            ...mapState({
                email: state => state.user.email,
                name: state => state.user.name
            })
        }
    }
</script>