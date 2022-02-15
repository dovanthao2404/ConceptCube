import { Route } from "react-router-dom";
import pages from "./pages";


export const routers = () => {
    return pages.map((item, key) => {
        return <Route key={key} path={item.path} element={<item.component />} />;
    });
};