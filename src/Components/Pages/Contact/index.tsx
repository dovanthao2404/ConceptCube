import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Contact: React.FC = () => {

    const nv = useNavigate();
    useEffect(() => {


    }, []);

    useEffect(() => {
        const titleContact = document.querySelector('.contact-title');
        const mapContact = document.querySelector('.box-map');
        const titleFirst = document.querySelector('.contact-title-1');
        const titleSecond = document.querySelector('.contact-title-2');


        const revealAnim = () => {
            const TLFade = gsap.timeline();
            TLFade
                .from(titleContact, {
                    autoAlpha: 0,
                    x: -380,
                    duration: 1,
                    ease: "power4.out",
                }, "-=0.2")
                .from(mapContact, { autoAlpha: 0, x: -40, duration: 1, ease: "power4.out" }, "-=0.2")
                .from(titleFirst, { autoAlpha: 0, x: -120, duration: .5, ease: "power4.out" })
                .from(titleSecond, { autoAlpha: 0, x: -120, duration: .5, ease: "power4.out" });
        };

        revealAnim();
    }, []);
    const { t } = useTranslation();

    const renderTextContact = (type: string) => {
        const data = t("contact", { returnObjects: true }) as any;
        return <>{data[type]}</>;
    }
        ;

    return <div className="contact-container">
        <div className="contact-content">

            <header>
                <h1 className="contact-title">
                    Contact us
                </h1>
            </header>
            <div className="box-map">
                <div className="map-child">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12678.116361691282!2d126.9906355!3d37.4009674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b39f590f50cd704!2z7J24642V7JuQSVTrsLjrpqw!5e0!3m2!1sko!2s!4v1644486182826!5m2!1sko!2s" style={{
                        border: 0
                    }} loading="lazy" title="map"></iframe>

                </div>
                <div className="map-child info-wrapper">
                    <div className="info">
                        <div className="top">
                            <p>{renderTextContact("address")}</p>
                            <p>{renderTextContact("district")}</p>
                            <p> Tel 02. 851. 2662</p> <p> Fax 02. 851. 2662</p>
                        </div>
                        <div className="bottom">
                            <div className="contact-title-1">
                                <div className="title ">Company</div>
                                <a href="mailto:looc.tzlee@gmail.com" title="">support@taejin.co.kr</a>
                            </div>

                            <div className="hidden"></div>
                            <div className="contact-title-2">
                                <div className="title ">Technical support </div>
                                <a href="mailto:looc.tzlee@gmail.com" title="">looc.tzlee@gmail.com</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Contact;