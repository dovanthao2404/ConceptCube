import { gsap } from "gsap";

const hiddenItem = (listEle: string[]) => {
    listEle.forEach((item: string, index: number) => {
        gsap.set(item, {
            visibility: "hidden",
        });
    });
};

export const onLeave = (a: any, destination: any, c: any) => {

    gsap.set("#fp-nav ul li a span ", { background: "#fff" });

    if (destination.index === 0) {
        const listEle: string[] = ['.first-title', ".first-page .logo", ".first-page .introduction"];
        hiddenItem(listEle);
    }
    else if (destination.index === 3) {
        const listEle: string[] = ['.four-section .box > .title', ".list-history"];
        hiddenItem(listEle);
    }
    else if (destination.index === 4) {
        const listEle: string[] = ['.fifth-page .fifth-list', ".fifth-page .fifth-text"];
        hiddenItem(listEle);

    }
};