<template>
    <div>
        <div class="page-header text-center">
            <div class="page-header text-center">
                <h3>Please select a seat that you would like to book</h3>
            </div>
            <app-user-trip-info-header></app-user-trip-info-header>
        </div>
        <app-bus-seats-map></app-bus-seats-map>
        <app-seat-id></app-seat-id>

    </div>
</template>

<script>
    import UserTripInfoHeader from './misc/UserTripInfoHeader.vue';
    import BusSeatsMap from './misc/BusSeatsMap.vue';
    import SeatId from './misc/SeatId.vue';

    export default {
        components: {
            appUserTripInfoHeader: UserTripInfoHeader,
            appBusSeatsMap: BusSeatsMap,
            appSeatId: SeatId
        }
    }

</script>