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
import { useNavigate } from "react-router-dom";

const fullpageOptions = {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fivePage"],

};
const Home: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {

        navigate("/");

    }, []);

    useEffect(() => {
        return () => {
            const navbarEle = document.querySelector(".nav-bar .switch-language.top") as any;

            const btnToggleEl = document.querySelector(".nav-bar .icon.top") as any;
            navbarEle.classList.remove("page-four");
            btnToggleEl.classList.remove("page-four");
        };
    }, []);



    return <ReactFullpage
        licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
        {...fullpageOptions}
        navigation={true}
        navigationPosition={'right'}
        onLeave={onLeave}
        afterLoad={afterLoad}
        scrollingSpeed={600}
        normalScrollElements={'.item-history-list, #menu,list-menu-sidebar'}
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