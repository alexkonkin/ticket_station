<template>
    <div>
        <div class="page-header text-center">
            <div class="page-header text-center">
                <h3>Your ticket is ready</h3>
            </div>

            <app-ticket></app-ticket>
            <app-send-email-to-customer></app-send-email-to-customer>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Ticket from './misc/Ticket.vue';
    import SendEmailToCustomer from './misc/SendEmailToCustomer.vue';

    export default {
        components: {
            appTicket: Ticket,
            appSendEmailToCustomer: SendEmailToCustomer
        }
    }

</script>