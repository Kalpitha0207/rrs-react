import Contact from "./Views/Contact/Contact";
import AdminDetails from "./Views/Details/AdminDetails";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";
import Payment from "./Views/Payment/Payment";
import Payment2 from "./Views/Payment/Payment2";
import PaymentRoomCharge from "./Views/Payment/PaymentRoomCharge";
import PaymentView from "./Views/Payment/PaymentView";
import PaymentView2 from "./Views/Payment/PaymentView2";
import PaymentViewCharge from "./Views/Payment/PaymentViewCharge";
import Rental from "./Views/Rentals/Rental";
import Reservation from "./Views/Reservation/Reservation";
import Restaurant from "./Views/Restaurant/Restaurant";
import Rooms from "./Views/Rooms/Rooms";

const routes = [
    // { path: "/", exact: true, name: 'Home', component: Home },
    { path: "/", strict: true, exact: true, name: 'Home', component: Home },
    { path: "/contact", strict: true, exact: true, name: 'Contact', component: Contact },
    { path: "/reservation", strict: true, exact: true, name: 'Reservation', component: Reservation },
    { path: "/restaurant", strict: true, exact: true, name: 'Restaurant', component: Restaurant },
    { path: "/rentals", strict: true, exact: true, name: 'Rental', component: Rental },
    { path: "/payment", strict: true, exact: true, name: 'Payment', component: Payment },
    { path: "/paymentview", strict: true, exact: true, name: 'PaymentView', component: PaymentView },
    { path: "/payment2", strict: true, exact: true, name: 'Payment2', component: Payment2 },
    { path: "/paymentview2", strict: true, exact: true, name: 'PaymentView2', component: PaymentView2 },
    { path: "/paymentRoomCharge", strict: true, exact: true, name: 'PaymentRoomCharge', component: PaymentRoomCharge },
    { path: "/paymentViewCharge", strict: true, exact: true, name: 'PaymentViewCharge', component: PaymentViewCharge },
    { path: "/details", strict: true, exact: true, name: 'Details', component: Details },
    { path: "/reports", strict: true, exact: true, name: 'AdminDetails', component: AdminDetails },
    { path: "/rooms", strict: true, exact: true, name: 'Rooms', component: Rooms }
];

export default routes;