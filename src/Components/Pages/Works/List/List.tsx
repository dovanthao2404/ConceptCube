import React from 'react';
import Card from '../Card/Card';
import data from "../data.json";
import "./List.scss";

interface list {
    tab: string;
}

const List: React.FC<list> = ({ tab }) => {

    const renderCard = (data: any) => {

        return data.map((item: any) => {
            return <Card key={item.id} item={item} />;
        });
    };
    let dataFilter = [...data];

    if (tab !== "ALL") {
        dataFilter = data.filter((item: any) => {
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