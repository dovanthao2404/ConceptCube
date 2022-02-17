import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "./data";
import "./style.scss";
import { gsap } from "gsap";
const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    const navigate = useNavigate();

    const btnToggleRef = useRef<any>();
    const navBarContent = useRef<any>();
    const switchRef = useRef<any>();

    const handleOpenNavbar = (e: any) => {
        if (btnToggleRef.current && navBarContent.current) {
            btnToggleRef.current.classList.toggle("open");
            navBarContent.current.classList.toggle("open");
            const switchLanguage = document.querySelector(
                ".switch-language.top"
            ) as any;
            switchLanguage.classList.toggle("open");
        }
    };

    const handleCloseNavbar = (url: string) => {
        if (pathname === url) {
            return;
        }
        else {
            handleOpenNavbar(null);
        }
    };

    const handleMouseDown = (e: any) => {

        if (btnToggleRef.current.getAttribute("class").includes("open")) {
            if (navBarContent.current && navBarContent.current.contains(e.target)) {

            } else if (switchRef.current && switchRef.current.contains(e.target)) {

            } else if (btnToggleRef.current && btnToggleRef.current.contains(e.target)) {

            } else {
                handleOpenNavbar(null);
            }
        }
    };

    const mouseDownCallback = useCallback((e) => handleMouseDown(e), []);


    useEffect(() => {
        if (mouseDownCallback) {
            document.addEventListener("click", mouseDownCallback);
        }
    }, [mouseDownCallback]);

    useEffect(() => {
        return () => {
            document.removeEventListener("click", mouseDownCallback);
        };
    }, [mouseDownCallback]);

    return (
        <div className="nav-bar">
            <nav role="navigation">
                <div className="box-toggle">
                    <div ref={btnToggleRef} className="icon top" onClick={handleOpenNavbar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div ref={switchRef} className="switch-language top">
                    <p
                        onClick={() => {
                            i18n.changeLanguage("ko");
                        }}
                        className={`${i18n.language === "ko" ? "active" : ""}`}
                    >
                        KR
                    </p>
                    <p
                        onClick={() => {
                            i18n.changeLanguage("en");
                        }}
                        className={`${i18n.language === "en" ? "active" : ""}`}
                    >
                        EN
                    </p>
                </div>
            </nav>
            <div ref={navBarContent} className="nav-bar-content">
                <nav role="navigation">
                    <div className="box-toggle">
                        <div className="icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="switch-language">
                        <p
                            onClick={() => {
                                i18n.changeLanguage("ko");
                            }}
                            className={`${i18n.language === "ko" ? "active" : ""}`}
                        >
                            KR
                        </p>
                        <p
                            onClick={() => {
                                i18n.changeLanguage("en");
                            }}
                            className={`${i18n.language === "en" ? "active" : ""}`}
                        >
                            EN
                        </p>
                    </div>
                </nav>
                <div className="list-link">
                    <div className="link">
                        {data.map((item) => {
                            return (
                                <div
                                    onClick={() => {
                                        navigate(item.url);
                                        handleCloseNavbar(item.url);
                                    }}
                                    className={`item-link ${pathname === item.url ? "active" : ""
                                        }`}
                                    key={item.id}
                                >
                                    <p>{item.name}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="info">
                        <div className="infoWrapper">
                            <p className="address">
                                {t("navbarAddress")}
                                <br />
                                T 02 543 4983
                            </p>
                            <p className="link">
                                <a
                                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                                    target="blank"
                                >
                                    View Map
                                </a>
                            </p>
                            <br />
                            <p className="title-nav-footer">Work with us.</p>
                            <p className="link">
                                <a href="mailto:looc.tzlee@gmail.com">
                                    looc.tzlee@gmail.com
                                </a>
                            </p>
                            <br />
                            <p className="title-nav-footer">Recruiting</p>
                            <p className="link">
                                <a href="mailto:looc.tzlee@gmail.com">
                                    looc.tzlee@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
