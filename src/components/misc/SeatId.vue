<template>
    <div>
        <div class="row col-md-2 top-buffer"></div>

        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputType" class="col-md-3 control-label">You've selected a seat/seats:</label>
                <div class="col-lg-3">
                    <input type="text" class="form-control" id="inputType" placeholder="Seat #" :value="seatId" readonly>
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
                seatId: state => state.seatId
            })
        }
    }
</script>