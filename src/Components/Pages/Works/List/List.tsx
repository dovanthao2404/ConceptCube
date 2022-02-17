import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import "./List.scss";

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

    return (
        <div className='work-list'>
            <div className="scroll">
                {renderCard(dataFilter)}
            </div>
        </div>
    );
};


export default List;