<template>
    <div>
         <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Source point of your trip</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item" v-for="station in stations" v-if="station.type == 's'" :class="{ active : (station.name == sourceStation) }"  @click="selectStation(station)">{{ station.name }}</li>
                </ul>
            </div>
        </div>

        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Destination points of your trip</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item" v-for="station in stations" v-if="station.type == 'd'" :class="{ active : (station.name == destinationStation) }"  @click="selectStation(station)">{{ station.name }}</li>
                </ul>
            </div>
        </div>

        <!--button
                class="btn btn-success"
                @click="test"
        >only test</button-->
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data: function(){
            return {
                stations: []
            };
        },
        created(){
            this.$http.get('https://tickets-17237.firebaseio.com/stations.json')
                    .then( response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data){
                        resultArray.push(data[key]);
                    }
                    console.log(resultArray);
                    this.stations = resultArray;
        });
        },
        updated(){
            console.log("updated source " + this.sourceStation);
            console.log("updated destination " + this.destinationStation);
        },
        methods: {
            fetchStationsList(){
                this.$http.get('https://tickets-17237.firebaseio.com/stations.json')
                        .then( response => {
                            return response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            for (let key in data){
                                resultArray.push(data[key]);
                            }
                            console.log(resultArray);
                            return resultArray;
                        });
            },
            selectStation: function (st) {
                if(st.type == 's') {
                     if (this.getSourceStation == null) {
                        this.$store.dispatch('addSrcStation', st);
                    } else {
                        this.$store.dispatch('addSrcStation', { name: null});
                    }

                }else{
                    if (this.getDestinationStation == null) {
                        this.$store.dispatch('addDstStation', st);
                    } else {
                        this.$store.dispatch('addDstStation', { name: null});
                    }
                }

            },
            test: function(){
                console.log("sourceStation "+ this.sourceStation);
                console.log("destinationStation "+ this.destinationStation);
             }
        },
        computed: {
            getSourceStation() {
                return this.$store.getters.sourceStation;
            },
            getDestinationStation() {
                return this.$store.getters.destinationStation;
            },
            ...mapState({
                    sourceStation: state => state.sourceStation,
                    destinationStation: state => state.destinationStation
            })
        }
    }
</script>
