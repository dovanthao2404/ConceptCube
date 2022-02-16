import gsap from "gsap";

export const afterLoad = (origin: any, destination: any, direction: any) => {


    if (destination.index === 0) {
        const TL = gsap.timeline();
        const windowWidth = window.innerWidth;
        TL
            .from(".first-page .logo", {
                y: -200,
                autoAlpha: 0
            })
            .from(".first-title", {
                x: -300,
                autoAlpha: 0,
                y: windowWidth >= 992 ? 0 : "50%"
            }, "-=0.3")
            .from(".first-page .introduction", {
                x: -200,
                autoAlpha: 0
            }, "-=0.3");

    } else if (destination.index === 1) {
    }
};