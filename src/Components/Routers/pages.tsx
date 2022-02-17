import Teams from "Components/Pages/Teams";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { RoutesString } from "./routerStrings";

export interface pagesInterface {
    path: string,
    component: React.FC;
}

const pages: pagesInterface[] = [
    {
        path: RoutesString.Home,
        component: Home,
    },
    {
        path: RoutesString.Contact,
        component: Contact,
    },
    {
        path: RoutesString.Teams,
        component: Teams,
    }
];

export default pages;
