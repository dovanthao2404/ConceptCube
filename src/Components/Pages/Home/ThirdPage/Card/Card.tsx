import { useTranslation } from "react-i18next";

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

    const { t, i18n } = useTranslation();

    const renderTextI18n = (type: string) => {
        const data = t("thirdPage", { returnObjects: true }) as any;
        return <>{data[type]}</>;
    };

    return <div className={`card card-${item.id}`}>
        <div
            className={`card-content`}
        >
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
            </div>
            <div>
                <img className={`item-img`} draggable="false" src={item.imageOff} alt="" />
            </div>
            <div
                className={`card-bottom card-bottom-${item.id} ${i18n.language === "en" ? "en" : ""}`}>
                <h3>{item.titleSmall}</h3>
                <p>{renderTextI18n(item.description)}</p>
            </div>
        </div>
    </div>;
};

export default Card;