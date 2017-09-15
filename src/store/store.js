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
        notes: []
    },
    actions: {
        addSrcStation({commit},st){
            commit('ADD_SRC_STATION', st)
        },
        addDstStation({commit},st){
            commit('ADD_DST_STATION', st)
        }
    },
    mutations: {
        ADD_SRC_STATION(state, st) {
            state.sourceStation = st.name;
        },
        ADD_DST_STATION(state, st) {
            state.destinationStation = st.name;
        }
    },
    getters: {
        sourceStation(state){
            return state.sourceStation;
        },
        destinationStation(state){
            return state.destinationStation;
        }
    }
});
