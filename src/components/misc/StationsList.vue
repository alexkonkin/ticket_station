<template>
    <div>
         <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Source point of your trip</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item" v-for="station in stations" v-if="station.type == 's'">{{ station.name }}</li>
                </ul>
            </div>
        </div>

        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Destination points of your trip</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item" v-for="station in stations" v-if="station.type == 'd'">{{ station.name }}</li>
                </ul>
            </div>
        </div>

        <button
                class="btn btn-success"
                @click="fetchStationsList"
         >Fetch Stations</button>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                items: [ { text:"station 1"}, { text:"station 2"}, { text:"station 3"}],
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
            }
        }
    }
</script>