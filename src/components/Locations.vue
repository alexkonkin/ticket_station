<template>
    <div class="page-header text-center">
        <div class="page-header text-center">
            <h3>Please introduce yourself and select a bus station and a destination point of your journey</h3>
        </div>
        <app-stations-list></app-stations-list>
        <app-personal-information></app-personal-information>
    </div>
</template>

<script>
    import StationsList from './misc/StationsList.vue';
    import PersonalInformation from './misc/PersonalInformation.vue';

    export default {
        components: {
            appStationsList: StationsList,
            appPersonalInformation: PersonalInformation
        }
    }

</script>