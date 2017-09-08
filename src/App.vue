<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/misc/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
</style>
