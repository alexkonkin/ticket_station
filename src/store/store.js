/**
 * Created by oleksiy.konkin on 9/15/2017.
 */
//https://codepen.io/sfi0zy/pen/dNxeKW
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        sourceStation: null,
        destinationStation: null,
        sourceStationSelected: false,
        destinationStationSelected: false,
        user: { name: null, email: null}
    },
    actions: {
        addSrcStation({commit},st){
            commit('ADD_SRC_STATION', st)
        },
        addDstStation({commit},st){
            commit('ADD_DST_STATION', st)
        },
        addUserName({commit},usr){
            commit('ADD_USER_NAME', usr)
        },
        addUserEmail({commit},usr){
            commit('ADD_USER_EMAIL', usr)
        }
    },
    mutations: {
        ADD_SRC_STATION(state, st) {
            state.sourceStation = st.name;
        },
        ADD_DST_STATION(state, st) {
            state.destinationStation = st.name;
        },
        ADD_USER_NAME(state, name) {
            state.user.name = name;
        },
        ADD_USER_EMAIL(state, email) {
            state.user.email = email;
        }
    },
    getters: {
        sourceStation(state){
            return state.sourceStation;
        },
        destinationStation(state){
            return state.destinationStation;
        },
        user(state){
            return state.user;
        }
    }
});
