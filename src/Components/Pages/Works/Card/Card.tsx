import React from 'react';
import "./Card.scss";

interface card {
    item: any;
}

const Card: React.FC<card> = ({ item }) => {
    return (
        <div className='card-pd'>

            <div className='work-card'>
                <div className="content">
                    <div className='inner_flex'>
                        <div>
                            <p className='desc'>{item.desc}</p>
                        </div>
                        <div>
                            <p className="partners">{item.partners}</p>
                        </div>
                    </div>
                </div>
                <div className={"card-background"} style={{
                    backgroundImage: `url(${item.img})`
                }}></div>
            </div>
        </div>
    );
};


export default Card;