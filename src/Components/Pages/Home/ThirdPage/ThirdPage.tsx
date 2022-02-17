import React, { useEffect } from "react";
import Card from "./Card/Card";
import Slider from "react-slick";
import "./ThirdPage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";

const ThirdPage: React.FC = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
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
    const handleHoverCard0 = (ele: HTMLElement, listEl: HTMLElement[]) => {
        ele.style.transform = "scaleY(1.05) scaleX(1.04) translateX(13px)";
        listEl.forEach((item: HTMLElement, index: number) => {
            if (item !== ele) {
                item.style.transform = "scaleY(1) scaleX(1) translateX(40px)";
            }
        });
    };
    const handleHoverCard1 = (ele: HTMLElement, listEl: HTMLElement[]) => {
        ele.style.transform = "scaleY(1.05) scaleX(1.04) ";
        listEl.forEach((item: HTMLElement, index: number) => {
            if (item !== ele) {
                if (item.getAttribute("class")?.includes("card-0")) {
                    item.style.transform = "scaleY(1) scaleX(1) translateX(-28px)";
                } else {
                    item.style.transform = "scaleY(1) scaleX(1) translateX(16px)";
                }
            }
        });
    };

    const handleHoverCard2 = (ele: HTMLElement, listEl: HTMLElement[]) => {
        ele.style.transform = "scaleY(1.05) scaleX(1.04) ";
        listEl.forEach((item: HTMLElement, index: number) => {
            if (item !== ele) {
                if (item.getAttribute("class")?.includes("card-3")) {
                    item.style.transform = "scaleY(1) scaleX(1) translateX(16px)";
                } else {
                    item.style.transform = "scaleY(1) scaleX(1) translateX(-28px)";
                }
            }
        });
    };

    const handleHoverCard3 = (ele: HTMLElement, listEl: HTMLElement[]) => {
        ele.style.transform = "scaleY(1.05) scaleX(1.04) translateX(-13px)";
        listEl.forEach((item: HTMLElement, index: number) => {
            if (item !== ele) {
                item.style.transform = "scaleY(1) scaleX(1) translateX(-40px)";
            }
        });
    };


    const handleRemoveActive = (ele: HTMLElement, listEl: HTMLElement[]) => {
        if (window.innerWidth > 767.98) {
            if (ele.getAttribute("class")?.includes("card-0")) {
                handleHoverCard0(ele, listEl);
            } else if (ele.getAttribute("class")?.includes("card-1")) {
                handleHoverCard1(ele, listEl);
            } else if (ele.getAttribute("class")?.includes("card-2")) {
                handleHoverCard2(ele, listEl);
            } else if (ele.getAttribute("class")?.includes("card-3")) {
                handleHoverCard3(ele, listEl);
            }
        }

        listEl.forEach((item: HTMLElement, index: number) => {
            if (item === ele) {
                ele.classList.add("active");
                const img: HTMLImageElement | null = item?.querySelector(".item-img");
                if (img) {
                    img.src = data[index].imageOn;
                }
            } else {
                item.classList.remove("active");
                const img: HTMLImageElement | null = item?.querySelector(".item-img");
                if (img) {
                    img.src = data[index].imageOff;
                }

            }
        });
    };

    useEffect(() => {
        const card1 = document.querySelector(".third-page-slider .card:first-child") as HTMLElement;
        const img: HTMLImageElement | null = card1?.querySelector(".item-img");
        if (img) {
            img.src = data[0].imageOn;
        }
        card1?.classList.add("active");

        const listItem = [...document.querySelectorAll(".third-page-slider .card") as any];

        if (window.innerWidth > 767.98) {
            handleHoverCard0(card1, listItem);
        }

        listItem.forEach((item: HTMLElement, index: number) => {
            item.addEventListener("mousemove", () => {
                handleRemoveActive(item, listItem);

            });
        });

    }, []);


    return <section className="section">
        <div className="third-page">
            <div className="container">

                <div className="third-page-slider">

                    <Slider  {...settings} >
                        {data.map((item, index) => {
                            return <Card key={index} item={item} />;
                        })}

                    </Slider>
                </div>
            </div>
        </div>
    </section>;
};

export default ThirdPage;