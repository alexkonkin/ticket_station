<template>
    <div>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputType" class="col-md-5 control-label">Bus number:</label>
                <div class="col-md-2">
                    <input type="text" class="form-control text-center" id="inputType" placeholder="Bus #" :value="busId" readonly>
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
                busId: state => state.busId
            })
        }
    }
</script>