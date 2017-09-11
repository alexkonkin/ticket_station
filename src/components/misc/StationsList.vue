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

        <button
                class="btn btn-success"
                @click="test"
        >only test</button>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                stations: [],
                sourceStation: null,
                sourceStationSelected: false,
                destinationStation: null
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
            console.log("updated " + this.sourceStation);
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
                    if (this.sourceStation == null) {
                        this.sourceStation = st.name;
                    } else {
                        this.sourceStation = null;
                    }
                }else{
                    if (this.destinationStation == null) {
                        this.destinationStation = st.name;
                    } else {
                        this.destinationStation = null;
                    }
                }

            },
            test: function(){
                console.log("sourceStation "+ this.sourceStation);
                console.log("destinationStation "+ this.destinationStation);
            }
        }
    }
</script>