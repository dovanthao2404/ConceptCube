import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    return <div>
        {/* {t("name")}
        <button onClick={() => {
            i18n.changeLanguage("ko");
        }}>kr</button>
        <button onClick={() => {
            i18n.changeLanguage("en");
        }}>en</button>
        <Link to="/contact">con</Link> */}

    </div>;
};

export default Navbar;