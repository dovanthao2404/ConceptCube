import React, { useEffect } from "react";
import FifthPage from "./FifthPage/FifthPage";
import FistPage from "./FirstPage/FirstPage";
import FourthPage from "./FourthPage/FourthPage";
import SecondPage from "./SecondPage/SecondPage";
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.scss";
import ThirdPage from "./ThirdPage/ThirdPage";
import { afterLoad } from "./Animation/afterLoad";
import { onLeave } from "./Animation/onLeave";

import { gsap } from "gsap";
const Home: React.FC = () => {

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         const TL = gsap.timeline({
    //             repeat: -1,
    //         });

    //         TL
    //             .from(".slider img", {
    //                 x: 700,
    //                 autoAlpha: 0,
    //                 duration: 0.75,
    //                 stagger: 3
    //             })
    //             .from(".slider img", {
    //                 autoAlpha: 0,
    //                 x: -700,
    //                 duration: 0.75,
    //                 stagger: 3
    //             }, 3);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // }, []);


    return <ReactFullpage
        licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
        // {...fullpageOptions}
        navigation={true}
        navigationPosition={'right'}
        onLeave={onLeave}
        afterLoad={afterLoad}
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