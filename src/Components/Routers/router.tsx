import { Route } from "react-router-dom";
import pages, { pagesInterface } from "./pages";


export const routers = () => {
    return pages.map((item: pagesInterface, key: number) => {
        return <Route key={key} path={item.path} element={<item.component />} />;
    });
};