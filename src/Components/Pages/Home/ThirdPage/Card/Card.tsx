
interface card {
    item: {
        title: string,
        titleSmall: string,
        imageOn: string,
        imageOff: string,
        description: string,
        id: number;
    };
}

const Card: React.FC<card> = ({ item }) => {
    return <div className={`card card-${item.id}`}>
        <div className="card-content">
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
            </div>
            <div>
                <img className="item-img" draggable="false" src={item.imageOff} alt="" />
            </div>
            <div className="card-bottom">
                <h3>{item.titleSmall}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    </div>;
};

export default Card;