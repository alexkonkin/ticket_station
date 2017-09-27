<template>
    <div>
        <div class="page-header text-center">
            <div class="page-header text-center">
                <h3>Please check the details of your selection and confirm the order</h3>
            </div>
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Personal information and selected seats: </h3>
                </div>
                <br>
                <app-user-trip-info-header></app-user-trip-info-header>
                <app-bus-id></app-bus-id>
                <app-seat-id></app-seat-id>
            </div>

            <app-price-calculation></app-price-calculation>

        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import UserTripInfoHeader from './misc/UserTripInfoHeader.vue';
    import BusSeatsMap from './misc/BusSeatsMap.vue';
    import SeatId from './misc/SeatId.vue';
    import BusId from './misc/BusId.vue';
    import PriceCalculation from './misc/PriceCalculation.vue';

    export default {
        components: {
            appUserTripInfoHeader: UserTripInfoHeader,
            appBusSeatsMap: BusSeatsMap,
            appSeatId: SeatId,
            appBusId: BusId,
            appPriceCalculation: PriceCalculation
        },
        computed: {
            ...mapState({
                seatIds: state => state.seatId
            })
        }
    }

</script>