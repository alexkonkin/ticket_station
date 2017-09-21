<template>
    <div class="bs-example" data-example-id="simple-thumbnails">
        <div class="container col-lg-11 top-buffer">
            <div class="row">
                <!--div class="col-md-3"></div-->
                <a v-for="seat in bus.seatsFirstRow"href="#" class="btn btn-sq-lg btn-space" :class="[{ 'btn-success' : seat.isDriversSeat == false && seat.isFree }, { 'btn-info' : seat.isDriversSeat == false && !seat.isFree }, { 'btn-warning' : seat.isDriversSeat == true }]">
                    <i class="fa fa-user fa-4x"></i><br>{{ seat.id }}<br/>
                    <p v-if="seat.isDriversSeat">Drivers<br>seat</p>
                    <p v-if="seat.isFree && !seat.isDriversSeat">free<br>seat</p>
                    <p v-if="!seat.isFree && !seat.isDriversSeat">{{ name }}</p>
                </a>
            </div>
            <div class="row top-buffer bottom-buffer">
                <!--div class="col-md-3"></div-->
                <a v-for="seat in bus.seatsSecondRow" href="#" class="btn btn-sq-lg btn-space" :class="[{ 'btn-success' : seat.isDriversSeat == false }, { 'btn-warning' : seat.isDriversSeat == true }]">
                    <i class="fa fa-user fa-4x"></i><br>{{ seat.id }}
                    <br/>
                    free<br>seat
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        /*
        data: function () {
            return {
                bus: {
                    seatsFirstRow: [
                        {id: 1, isFree: false, isDriversSeat: false},
                        {id: 2, isFree: true, isDriversSeat: false},
                        {id: 3, isFree: true, isDriversSeat: false},
                        {id: 4, isFree: true, isDriversSeat: false},
                        {id: 5, isFree: true, isDriversSeat: false},
                        {id: 6, isFree: true, isDriversSeat: false},
                        {id: 7, isFree: true, isDriversSeat: false},
                        {id: 8, isFree: true, isDriversSeat: true}
                    ],
                    seatsSecondRow: [
                        {id: 9, isFree: true, isDriversSeat: false},
                        {id: 10, isFree: true, isDriversSeat: false},
                        {id: 11, isFree: true, isDriversSeat: false},
                        {id: 12, isFree: true, isDriversSeat: false},
                        {id: 13, isFree: true, isDriversSeat: false},
                        {id: 14, isFree: true, isDriversSeat: false},
                        {id: 15, isFree: true, isDriversSeat: false},
                        {id: 16, isFree: true, isDriversSeat: false}
                    ]
                }
            };
        },
        */
        methods: {
            test: function(val, e){
                console.log("button 1 "+ val);
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
