import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.scss";
const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    return <div className="nav-bar">
        <nav role="navigation">

            <div className="box-toggle">
                <div></div>
                <div></div>
            </div>
            <div className="switch-language">
                <p>KR</p>
                <p>EN</p>
            </div>
        </nav>

    </div>;
};

export default Navbar;