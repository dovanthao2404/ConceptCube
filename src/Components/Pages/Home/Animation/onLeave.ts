import { gsap } from "gsap";

const hiddenItem = (listEle: string[]) => {
    listEle.forEach((item: string, index: number) => {
        const el = document.querySelector(item) as any;
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
};