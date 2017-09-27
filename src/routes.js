/**
 * Created by oleksiy.konkin on 9/8/2017.
 */
import Locations from './components/Locations.vue';
import Seats from './components/Seats.vue';
import Order from './components/Order.vue';
import Tickets from './components/Tickets.vue';


export const routes = [
    { path: '', component: Locations},
    { path: '/seats', component: Seats},
    { path: '/order', component: Order},
    { path: '/tickets', component: Tickets}
];
