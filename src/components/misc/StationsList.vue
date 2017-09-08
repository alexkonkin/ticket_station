<template>
    <div>
         <!--div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Bus stations:</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item active">Bus station 1</li>
                    <li class="list-group-item">Bus station 2</li>
                    <li class="list-group-item">Bus station 3</li>
                    <li class="list-group-item">Bus station 4</li>
                    <li class="list-group-item">Bus station 5</li>
                    <li class="list-group-item">Bus station 6</li>
                    <li class="list-group-item">Bus station 7</li>
                    <li class="list-group-item">Bus station 8</li>
                    <li class="list-group-item">Bus station 9</li>
                </ul>
            </div>
        </div-->
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Bus stations:</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group listScrollBar">
                    <li class="list-group-item" v-for="item in items">{{ item.text }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                items: [ { text:"station 1"}, { text:"station 2"}, { text:"station 3"}]
            }

        }
    }
</script>