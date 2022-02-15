import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { RoutesString } from "./routerStrings";


const pages = [
    {
        path: RoutesString.Home,
        component: Home,
    },
    {
        path: RoutesString.Contact,
        component: Contact,

    }
];

export default pages;
