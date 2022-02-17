import React from "react";
import logo from "Assets/Images/logo-icon.png";
import "./FirstPage.scss";
const FistPage: React.FC = () => {

    const renderImage = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                <img draggable="false" className={`img img-${i + 1}`} key={i} src={require(`Assets/Images/bg-object-${i + 1}.png`)} alt="" />
            );
        }
        return arr;
    };
    return <section className="section">
        <div className="first-page">
            <div className="logo">
                <img className="logo-img" src={logo} alt="" />
            </div>
            <div className="about">
                <p>About The Project</p>
            </div>
            {renderImage()}
            <div className="first-title">
                <p> everything
                </p>
                <p>is in the</p>
                <p>conceptcube</p>
            </div>
            <div className="introduction">
                <p>ConceptCube Company Introduction
                </p>
            </div>
        </div>
    </section>;
};

export default FistPage;