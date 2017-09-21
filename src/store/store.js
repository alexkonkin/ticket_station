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
        user: { name: null, email: null},
        seatId: null,
        bus: {
            seatsFirstRow: [
                {id: 1, isFree: true, isDriversSeat: false},
                {id: 2, isFree: true, isDriversSeat: false},
                {id: 3, isFree: true, isDriversSeat: false},
                {id: 4, isFree: true, isDriversSeat: false},
                {id: 5, isFree: true, isDriversSeat: false},
                {id: 6, isFree: true, isDriversSeat: false},
                {id: 7, isFree: true, isDriversSeat: false},
                {id: 8, isFree: true, isDriversSeat: true}
            ],
            seatsSecondRow: [
                {id: 9, isFree: true, isDriversSeat: false},
                {id: 10, isFree: true, isDriversSeat: false},
                {id: 11, isFree: true, isDriversSeat: false},
                {id: 12, isFree: true, isDriversSeat: false},
                {id: 13, isFree: true, isDriversSeat: false},
                {id: 14, isFree: true, isDriversSeat: false},
                {id: 15, isFree: true, isDriversSeat: false},
                {id: 16, isFree: true, isDriversSeat: false}
            ]
        }
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
