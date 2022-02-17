import React, { useEffect, useState } from "react";
import List from "./List/List";
import MenuTab from "./MenuTab/MenuTab";
import "./style.scss";
import queryString from "query-string";
import { createSearchParams, NavLink, useLocation, useNavigate } from "react-router-dom";
import { dataTypeNotID } from "./dataType";
import logoConcept from "Assets/Images/logo-icon.png";
import Popup from "./Popup/Popup";

const Works: React.FC = () => {
    const location = useLocation();
    const [tab, setTab] = useState("");
    const [contentPopup, setContentModal] = useState<any>(null);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (content: any) => {
        setContentModal(content);
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        setContentModal(null);

    };

    useEffect(() => {
        const { tab } = queryString.parse(location.search) as any;
        if (dataTypeNotID.includes(tab)) {
            setTab(tab);
        } else {
            setTab("ALL");
            navigate({
                pathname: "/works",
                search: `?${createSearchParams({
                    tab: ""
                })}`
            });
        }

    }, []);


    return <>
        <div className="works">
            <div className="work-wrapper">
                <div className="work-container">
                    <div className="logo-title">
                        WORKS
                    </div>
                    <div className="card-all-wrapper">
                        <MenuTab tab={tab} setTab={setTab} />
                        <List tab={tab} handleOpen={handleOpen} />
                        <div className="card-all-footer">
                            <NavLink to={"/"}>
                                <img src={logoConcept} alt="" />
                            </NavLink>
                            <a target={"_blank"} rel="noreferrer" href={"https://vimeo.com/loocreative"}>
                                <p>VIMEO</p>
                            </a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.instagram.com/loocreative/"}>
                                <p>YOUTUBE</p>
                            </a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.instagram.com/loocreative/"}>
                                <p>instagram</p>
                            </a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.facebook.com/loocreativeinc-110670107091286/"}>
                                <p>facebook</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Popup handleClose={handleClose} isOpen={isOpen} contentPopup={contentPopup} />
    </>;
};

export default Works;