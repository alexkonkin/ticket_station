<template>
    <div class="bs-example" data-example-id="simple-thumbnails">
        <div class="container col-lg-11 top-buffer">
            <div class="row">
                <!--div class="col-md-3"></div-->
                <a v-for="seat in bus.seatsFirstRow" href="#"
                   class="btn btn-sq-lg btn-space"
                   :class="[{ 'btn-success' : seat.isDriversSeat == false && seat.isFree }, { 'btn-info' : seat.isDriversSeat == false && !seat.isFree }, { 'btn-warning' : seat.isDriversSeat == true }]"
                   @click="bookOrReleaseSeat(1, seat)">
                    <i class="fa fa-user fa-4x"></i><br>{{ seat.id }}<br/>
                    <p v-if="seat.isDriversSeat">Drivers<br>seat</p>
                    <p v-if="seat.isFree && !seat.isDriversSeat">free<br>seat</p>
                    <p v-if="!seat.isFree && !seat.isDriversSeat">{{ name }}</p>
                </a>
            </div>
            <div class="row top-buffer bottom-buffer">
                <!--div class="col-md-3"></div-->
                <a v-for="seat in bus.seatsSecondRow" href="#"
                   class="btn btn-sq-lg btn-space"
                   :class="[{ 'btn-success' : seat.isDriversSeat == false && seat.isFree }, { 'btn-info' : seat.isDriversSeat == false && !seat.isFree }, { 'btn-warning' : seat.isDriversSeat == true }]"
                   @click="bookOrReleaseSeat(2, seat)">
                    <i class="fa fa-user fa-4x"></i><br>{{ seat.id }}<br/>
                    <p v-if="seat.isDriversSeat">Drivers<br>seat</p>
                    <p v-if="seat.isFree && !seat.isDriversSeat">free<br>seat</p>
                    <p v-if="!seat.isFree && !seat.isDriversSeat">{{ name }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        methods: {
            test: function(val, e){
                console.log("button 1 "+ val);
            },
            bookOrReleaseSeat: function(row, seat) {
                this.$store.dispatch('bookOrReleaseSeat', {row: row, seat: seat, name: name});
            }
        },
        computed: {
            ...mapState({
                email: state => state.user.email,
                name: state => state.user.name,
                sourceStation: state => state.sourceStation,
                destinationStation: state => state.destinationStation,
                bus: state => state.bus
            })
        }
    }
</script>
