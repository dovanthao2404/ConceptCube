import React from 'react';
import "./SecondPage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondPage: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false

    };
    const renderSlider = () => {
        let arr = [];
        for (let i = 0; i < 6; i++) {
            arr.push(
                <div key={i} className="item-slide">
                    <img draggable="false" className={`img img-${i + 1}`} src={require(`Assets/Images/console-img-${i + 1}.png`)} alt="" />
                </div>
            );
        }
        return arr;
    };

    return (
        <section className="section">
            <div className='second-page'>
                <div className='creative'>
                    <p className='first'>Creative,</p>
                    <p className='fun'>Fun and-</p>
                    <p className='enjoyable'>Enjoyable</p>
                    <p className='work'>work</p>
                    <p className='impressive'>Impressive</p>
                </div>

                <div className='slider-page-two'>
                    <Slider {...settings} >
                        {renderSlider()}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default SecondPage;