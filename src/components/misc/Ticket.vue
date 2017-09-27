<template>
    <div>
        <div class="container">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Information about your order:</h3>
                </div>
                <div class="panel-body">
                    <div class="list-group ticketScrollBar">
                        <div class="list-group-item" v-for="seat in seatIds">
                            <form class="form-horizontal visible-border ">
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Ticket ID:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control disabled" id="focusedInput" type="text" :value="ticketId(seat)"  disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">First and Last name:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="name" disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Entry point:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="sourceStation" disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Destination point:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="destinationStation" disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Bus #:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="busId" disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Seat #:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="seat" disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Total:</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" id="focusedInput" type="text" :value="pricePerSeat | currency" disabled>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>   <!-- list group -->
                </div>	<!-- panel -->
            </div>	<!-- panel body -->
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

     export default {
         computed: {
         ...mapState({
             seatIds: state => state.seatId,
             email: state => state.user.email,
             name: state => state.user.name,
             sourceStation: state => state.sourceStation,
             destinationStation: state => state.destinationStation,
             busId: state => state.busId,
             pricePerSeat: state => state.pricePerSeat
         })
         },
        methods: {
            ticketId: function(value){
                return value +"-"+this.busId;
            }
        },
        filters: {
            currency: function(value) {
                return '$ ' + parseFloat(value).toFixed(2);
            }
        }
     }
</script>