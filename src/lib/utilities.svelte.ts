/**
 * @param {number} min
 * @param {number} max
 */
export function getRandomInt(min : number, max : number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type navButton = {
    isButton: boolean;
    text: string;
    location: string;
    style: string;
    func: string;
}