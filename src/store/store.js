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
        seatId: [],
        pricePerSeat: 20.00,
        busId: (Math.floor(Math.random() * (100 - 1 + 1)) + 1) +"-"+ String("ABCDEFGHIJKLMNOPQURSTUVWXYZ").substr( Math.floor(Math.random() * 27), 1),
        bus: {
            seatsFirstRow: [
                {id: 1, isFree: true, isDriversSeat: false, userName: null},
                {id: 2, isFree: true, isDriversSeat: false, userName: null},
                {id: 3, isFree: true, isDriversSeat: false, userName: null},
                {id: 4, isFree: true, isDriversSeat: false, userName: null},
                {id: 5, isFree: true, isDriversSeat: false, userName: null},
                {id: 6, isFree: true, isDriversSeat: false, userName: null},
                {id: 7, isFree: true, isDriversSeat: false, userName: null},
                {id: 8, isFree: true, isDriversSeat: true, userName: null}
            ],
            seatsSecondRow: [
                {id: 9, isFree: true, isDriversSeat: false, userName: null},
                {id: 10, isFree: true, isDriversSeat: false, userName: null},
                {id: 11, isFree: true, isDriversSeat: false, userName: null},
                {id: 12, isFree: true, isDriversSeat: false, userName: null},
                {id: 13, isFree: true, isDriversSeat: false, userName: null},
                {id: 14, isFree: true, isDriversSeat: false, userName: null},
                {id: 15, isFree: true, isDriversSeat: false, userName: null},
                {id: 16, isFree: true, isDriversSeat: false, userName: null}
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
        },
        bookOrReleaseSeat({commit},seatInfo){
            commit('BOOK_OR_RELEASE_SEAT', seatInfo)
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
        },
        BOOK_OR_RELEASE_SEAT(state, seatInfo) {
            switch(seatInfo.row) {
                case 1:
                    state.bus.seatsFirstRow.forEach((item, i) => {
                        if (item.id == seatInfo.seat.id){
                            if (item.isFree == true) {
                                item.isFree = false;
                                item.userName = seatInfo.name;
                            } else {
                                item.isFree = true;
                                item.userName = null;
                            }
                        }
                    });
                    break;
                case 2:
                    state.bus.seatsSecondRow.forEach((item, i) => {
                        if (item.id == seatInfo.seat.id){
                            if (item.isFree == true) {
                                item.isFree = false;
                                item.userName = seatInfo.name;
                            } else {
                                item.isFree = true;
                                item.userName = null;
                            }
                        }
                    });
                    break;
            }
            state.seatId = [];
            state.bus.seatsFirstRow.forEach((item) => {
                if (!item.isFree && !item.isDriversSeat) {
                    state.seatId.push(item.id);

                }
            });
            state.bus.seatsSecondRow.forEach((item) => {
                if (!item.isFree && !item.isDriversSeat) {
                    state.seatId.push(item.id);

                }
            });
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
        },
        seatIds(state){
            return state.seatId;
        }
    }
});
