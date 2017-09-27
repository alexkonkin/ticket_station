<template>
    <div>
        <div class="page-header text-center">
            <div class="page-header text-center">
                <h3>Your ticket is ready</h3>
            </div>

            <app-ticket></app-ticket>

        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Ticket from './misc/Ticket.vue';

    export default {
        components: {
            appTicket: Ticket
        }
    }

</script>