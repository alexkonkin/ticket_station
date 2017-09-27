<template>
    <div>
        <div class="container">
            <form class="form-horizontal invisible-border col-sm-6">
                <div class="form-group">
                    <div class="col-xs-6">
                        <button type="button" class="form-control btn btn-info">Send Ticket</button>
                    </div>
                    <div class="col-sm-6">
                        <input class="form-control" id="focusedInput" type="text" :value="email" readonly>
                    </div>
                </div>
            </form>
        </div>

        <div class="row col-md-4 top-buffer"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                email: state => state.user.email
            })
        }
    }
</script>