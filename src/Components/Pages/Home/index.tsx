import React from "react";
import FifthPage from "./FifthPage/FifthPage";
import FistPage from "./FirstPage/FirstPage";
import FourthPage from "./FourthPage/FourthPage";
import SecondPage from "./SecondPage/SecondPage";
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.scss";
import ThirdPage from "./ThirdPage/ThirdPage";
const Home: React.FC = () => {
    return <ReactFullpage
        licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
        // {...fullpageOptions}
        navigation={true}
        navigationPosition={'right'}
        // onLeave={onLeave}
        // afterLoad={afterLoad}
        scrollingSpeed={600}
        // normalScrollElements={'.item-history, #menu,list-menu-sidebar'}
        render={() => {

            return <div className="home">
                <FistPage />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                <FifthPage />
            </div>;
        }}
    />;
};

export default Home;