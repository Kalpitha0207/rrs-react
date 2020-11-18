import Contact from "./Views/Contact/Contact";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";
import Payment from "./Views/Payment/Payment";
import PaymentView from "./Views/Payment/PaymentView";
import Rental from "./Views/Rentals/Rental";
import Reservation from "./Views/Reservation/Reservation";
import Restaurant from "./Views/Restaurant/Restaurant";

const routes = [
    // { path: "/", exact: true, name: 'Home', component: Home },
    { path: "/", strict: true, exact: true, name: 'Home', component: Home },
    { path: "/contact", strict: true, exact: true, name: 'Contact', component: Contact },
    { path: "/reservation", strict: true, exact: true, name: 'Reservation', component: Reservation },
    { path: "/restaurant", strict: true, exact: true, name: 'Restaurant', component: Restaurant },
    { path: "/rentals", strict: true, exact: true, name: 'Rental', component: Rental },
    { path: "/payment", strict: true, exact: true, name: 'Payment', component: Payment },
    { path: "/paymentview", strict: true, exact: true, name: 'PaymentView', component: PaymentView },
    { path: "/details", strict: true, exact: true, name: 'Details', component: Details },
    // { path: "/payment", strict: true, exact: true, name: 'Details', component: Details }
];

export default routes;