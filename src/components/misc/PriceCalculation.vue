<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">Price calculation:</h3>
        </div>
        <div class="panel-body">
            <div class="form">
                <div class="form-group   col-lg-6">
                    <label for="userName">Price per seat:</label>
                    <input type="text" class="form-control text-center" id="userName" :value="pricePerSeat" readonly>
                </div>
                <div class="form-group col-lg-6">
                    <label for="userEmail">Total:</label>
                    <input type="text" class="form-control text-center" id="userEmail" placeholder="email@example.com" :value="total" readonly>
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
                pricePerSeat: state => state.pricePerSeat,
                seatId: state => state.seatId
            }),
            total: function(){
                console.log(this.pricePerSeat * this.seatId);
                return this.pricePerSeat * this.seatId.length;
            }
        }
    }
</script>