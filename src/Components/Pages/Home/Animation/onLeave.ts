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
        const listEle: string[] = ['.first-title', ".first-page .logo", ".first-page .introduction"];
        hiddenItem(listEle);
    }
    else if (destination.index === 2) {
        const dotEle = document.querySelectorAll("#fp-nav ul li a.page-four") as any;

        [...dotEle].forEach(item => {
            item.classList.remove("page-four");
        });
    }
    else if (destination.index === 3) {
        const listEle: string[] = ['.four-section .box > .title', ".list-history"];
        hiddenItem(listEle);
        const dotEle = document.querySelectorAll("#fp-nav ul li a") as any;

        [...dotEle].forEach(item => {
            item.classList.add("page-four");
        });
    }
    else if (destination.index === 4) {
        const listEle: string[] = ['.fifth-page .fifth-list', ".fifth-page .fifth-text"];
        hiddenItem(listEle);
        const dotEle = document.querySelectorAll("#fp-nav ul li a.page-four") as any;

        [...dotEle].forEach(item => {
            item.classList.remove("page-four");
        });

    }
};