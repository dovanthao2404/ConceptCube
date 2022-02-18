import gsap from "gsap";

export const afterLoad = (origin: any, destination: any, direction: any) => {
    console.log(destination.index);
    if (destination.index === 0) {

        const TL = gsap.timeline();
        TL
            .from(".first-page .logo", {
                y: -200,
                autoAlpha: 0
            }, "-=0.3")
            .from(".first-page .about", {
                y: -200,
                autoAlpha: 0
            }, "-=0.4")
            .from(".first-title", {
                x: -300,
                autoAlpha: 0,
            }, "-=0.3")
            .from(".first-page .introduction", {
                x: -200,
                autoAlpha: 0
            }, "-=0.3");




    } else if (destination.index === 1) {

        gsap.from(".second-page .creative .first", {
            autoAlpha: 0,
            x: -400,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".second-page .creative .fun", {
            autoAlpha: 0,
            x: 400,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".second-page .creative .enjoyable", {
            autoAlpha: 0,
            x: -400,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".second-page .creative .work", {
            autoAlpha: 0,
            x: 400,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".second-page .creative .impressive", {
            autoAlpha: 0,
            x: -400,
            duration: 1,
            ease: "power4.out",
        });




    } else if (destination.index === 2) {





    } else if (destination.index === 3) {





        gsap.from(".four-section .box > .title", {
            autoAlpha: 0,
            y: -220,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".list-history", {
            autoAlpha: 0,
            x: -420,
            duration: 1,
            ease: "power4.out",
            delay: 0.3,
        });



    } else if (destination.index === 4) {


        const TL = gsap.timeline();
        TL
            .from(".fifth-page .fifth-list", {
                autoAlpha: 0,
            })
            .from(".fifth-page .fifth-item", {
                x: -700,
                autoAlpha: 0,
                stagger: 0.3,
                delay: 0.2
            }, "-0.3")
            .from(".fifth-page .fifth-text", {
                x: -300,
                autoAlpha: 0,
            }, "-=0.6");



    }
};