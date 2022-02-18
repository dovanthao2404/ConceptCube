import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import "./List.scss";
import { gsap } from "gsap";
interface list {
    tab: string,
    handleOpen: any;
}

const List: React.FC<list> = ({ tab, handleOpen }) => {
    const { t } = useTranslation();

    const renderCard = (data: any) => {

        return data.map((item: any) => {
            return <Card handleOpen={handleOpen} key={item.id} item={item} />;
        });
    };
    const listData = t("works", { returnObjects: true }) as any;

    let dataFilter = [...listData];

    if (tab !== "ALL") {
        dataFilter = listData.filter((item: any) => {
            return item.desc === tab;
        });

    }


    useEffect(() => {

        const listCard = document.querySelectorAll(".work-list .card-pd") as any;
        listCard.forEach((item: HTMLElement) => {
            item.style.visibility = "hidden";
        });
        if (listCard && listCard.length) {
            if (listCard.length === 2) {
                const TL = gsap.timeline();
                TL.from(listCard[0], {
                    autoAlpha: 0,
                }).set(listCard[1], {
                    visibility: "visible",
                    opacity: 1,
                }, "-=0.3");
            } else {
                gsap.from(listCard, {
                    autoAlpha: 0,
                    stagger: 0.05,
                });
            }
        }
        const listEle = document.querySelector(".works .work-list") as any;
        listEle.scrollTo(0, 0);
    }, [tab]);




    return (
        <div className='work-list'>
            <div className="scroll">
                {renderCard(dataFilter)}
            </div>
        </div>
    );
};


export default List;