import { gsap } from "gsap";

const hiddenItem = (listEle: string[]) => {
    listEle.forEach((item: string, index: number) => {
        gsap.set(item, {
            visibility: "hidden",
        });
    });
};

export const onLeave = (a: any, destination: any, c: any) => {
    if (destination.index === 0) {
        const listEle: string[] = ['.first-title', ".first-page .logo", ".first-page .introduction", ".first-page .about"];
        hiddenItem(listEle);
    } else if (destination.index === 1) {

        const listEle: string[] = ['.second-page .creative .first', ".second-page .creative .fun", ".second-page .creative .enjoyable", ".second-page .creative .work", ".second-page .creative .impressive", ".third-page-slider .slick-slide"];
        hiddenItem(listEle);


    }
    else if (destination.index === 2) {
        const dotEle = document.querySelectorAll("#fp-nav ul li a.page-four") as any;

        [...dotEle].forEach(item => {
            item.classList.remove("page-four");
        });
        const navbarEle = document.querySelector(".nav-bar .switch-language.top") as any;

        const btnToggleEl = document.querySelector(".nav-bar .icon.top") as any;
        navbarEle.classList.remove("page-four");
        btnToggleEl.classList.remove("page-four");
        gsap.from(".third-page-slider .slick-slide ", {
            autoAlpha: 0,
            y: -300,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2,
            delay: 0.5
        });


    }
    else if (destination.index === 3) {
        const listEle: string[] = ['.four-section .box > .title', ".list-history", ".third-page-slider .slick-slide"];
        hiddenItem(listEle);
        const dotEle = document.querySelectorAll("#fp-nav ul li a") as any;

        [...dotEle].forEach(item => {
            item.classList.add("page-four");
        });
        const navbarEle = document.querySelector(".nav-bar .switch-language.top") as any;

        const btnToggleEl = document.querySelector(".nav-bar .icon.top") as any;



        navbarEle.classList.add("page-four");
        btnToggleEl.classList.add("page-four");
    }
    else if (destination.index === 4) {
        const listEle: string[] = ['.fifth-page .fifth-list', ".fifth-page .fifth-text"];
        hiddenItem(listEle);
        const dotEle = document.querySelectorAll("#fp-nav ul li a.page-four") as any;

        [...dotEle].forEach(item => {
            item.classList.remove("page-four");
        });

        const navbarEle = document.querySelector(".nav-bar .switch-language.top") as any;

        const btnToggleEl = document.querySelector(".nav-bar .icon.top") as any;
        navbarEle.classList.remove("page-four");
        btnToggleEl.classList.remove("page-four");

    }
};