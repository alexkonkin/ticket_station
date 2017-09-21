<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="icEmail" class="col-md-5 control-label">User Name:</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="icEmail" placeholder="User Name" :value="name" readonly>
                </div>
            </div>
            <div class="form-group">
                <label for="icSourceStation" class="col-md-5 control-label">Entry point:</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="icSourceStation" placeholder="Entry Station" :value="sourceStation" readonly>
                </div>
            </div>
            <div class="form-group">
                <label for="icDestinationStation" class="col-md-5 control-label">Destination Point:</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="icDestinationStation" placeholder="Destination Statioin" :value="destinationStation" readonly>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
        ...mapState({
            name: state => state.user.name,
            sourceStation: state => state.sourceStation,
            destinationStation: state => state.destinationStation
        }),
    getUser() {
        return this.$store.getters.user;
    }
    }
    }
</script>

