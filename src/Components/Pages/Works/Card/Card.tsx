import React from 'react';
import "./Card.scss";

interface card {
    item: any,
    handleOpen: any;
}

const Card: React.FC<card> = ({ item, handleOpen }) => {
    return (
        <div className='card-pd'>

            <div onClick={() => {
                handleOpen(item);
            }} className='work-card'>
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
                <img loading='lazy' className="card-background" src={item.img} alt="" />
            </div>
        </div>
    );
};


export default Card;