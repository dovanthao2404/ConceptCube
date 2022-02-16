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
                    Creative,
                    Fun and-
                    Enjoyable
                    work
                    Impressive
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