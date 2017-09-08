/**
 * Created by oleksiy.konkin on 9/8/2017.
 */
import Home from './components/Home.vue';
import Locations from './components/Locations.vue';
import Seats from './components/Seats.vue';
import Order from './components/Order.vue';
import Ticket from './components/Ticket.vue';


export const routes = [
    { path: '', component: Locations},
    { path: '/seats', component: Seats},
    { path: '/order', component: Order},
    { path: '/ticket', component: Ticket}
];
