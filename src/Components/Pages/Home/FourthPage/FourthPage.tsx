import React from 'react';
import "./FourthPage.scss";
import Slider from "react-slick";
import dataKo from "./dataKo.json";
const FourthPage: React.FC = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: false,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    initialSlide: 1,

                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    speed: 100,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    speed: 100,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <section className="section">
            <div className="fourth-page  four-section">
                <div className="container">

                    <div className="box">

                        <div className='title'>History</div>
                        <div className='list-history'>

                            <Slider {...settings}>
                                {dataKo?.map((item, key) => {
                                    return <div key={key} className="history-item">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className='item-history-list'>
                                            {
                                                item.listItem.map((item, key) => {
                                                    return <div key={key} className='item'>
                                                        <p className='text'>{item.text} </p>
                                                        <p className='type'>{item.type}</p>
                                                    </div>;
                                                })
                                            }

                                        </div>
                                    </div>;
                                })}

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthPage;