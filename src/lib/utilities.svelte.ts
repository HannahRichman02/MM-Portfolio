/**
 * @param {number} min
 * @param {number} max
 */
export function getRandomInt(min : number, max : number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function lerp(min: number, max: number, time: number) {
    return Math.round(min + (max - min) * time);
}


export type NavigationButton = {
    isButton: boolean;
    text: string;
    location: string | null;
    style: string;
    func: (() => void) | null;
};