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
    const [dataRender, setDataRender] = useState();
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

        const listCard = document.querySelectorAll(".work-list .card-pd");
        if (listCard) {
            gsap.from(listCard, {
                autoAlpha: 0,
                stagger: 0.05,
            });
        }
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