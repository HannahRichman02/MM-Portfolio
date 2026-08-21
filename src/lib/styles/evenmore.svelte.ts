import { browser } from '$app/environment';

let gif_bedroom_version: number = $state(0)

function restartGif(which: string) {
    switch(which) {
        case'bedroom':
            gif_bedroom_version += 1
            break
        default:
            console.error('Unknown gif version: ${which}')
    }
}

function getGifVersion(which: string): number {
    switch (which) {
        case 'bedroom':
            return gif_bedroom_version
        default:
            console.error('Unknown gif version: ${which}')
            return 0
    }
}

export {getGifVersion, restartGif, lightScroll}

let workHighlights = $state({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
    eleventh: false,
    twelfth: false,
    thirteenth: false,
    fourteenth: false,

})

let aboutHighlights = $state({
    first: false,
    second: false,
    third: false,

})

let contactHighlights = $state({
    first: false,
})


async function lightScroll(location: string) {
    switch(location) {
        case 'Work':
            workHighlights.first = true;
            await setTimeout(() => {workHighlights.second = true;}, 150)
            await setTimeout(() => {workHighlights.third = true;}, 300)
            await setTimeout(() => {workHighlights.fourth = true;}, 450)
            await setTimeout(() => {workHighlights.fifth = true;}, 600)
            await setTimeout(() => {workHighlights.sixth = true;}, 750)
            await setTimeout(() => {workHighlights.seventh = true;}, 900)
            await setTimeout(() => {workHighlights.first = false;}, 1000)
            await setTimeout(() => {workHighlights.eighth = true;}, 1050)
            await setTimeout(() => {workHighlights.second = false;}, 1150)
            await setTimeout(() => {workHighlights.ninth = true;}, 1200)
            await setTimeout(() => {workHighlights.third = false;}, 1300)
            await setTimeout(() => {workHighlights.tenth = true;}, 1350)
            await setTimeout(() => {workHighlights.fourth = false;}, 1450)
            await setTimeout(() => {workHighlights.eleventh = true;}, 1500)
            await setTimeout(() => {workHighlights.fifth = false;}, 1600)
            await setTimeout(() => {workHighlights.twelfth = true;}, 1650)
            await setTimeout(() => {workHighlights.sixth = false;}, 1750)
            await setTimeout(() => {workHighlights.thirteenth = true;}, 1800)
            await setTimeout(() => {workHighlights.seventh = false;}, 1900)
            await setTimeout(() => {workHighlights.fourteenth = true;}, 1950)
            await setTimeout(() => {workHighlights.eighth = false;}, 2050)
            await setTimeout(() => {workHighlights.ninth = false;}, 2200)
            await setTimeout(() => {workHighlights.tenth = false;}, 2350)
            await setTimeout(() => {workHighlights.eleventh = false;}, 2500)
            await setTimeout(() => {workHighlights.twelfth = false;}, 2650)
            await setTimeout(() => {workHighlights.thirteenth = false;}, 2800)
            await setTimeout(() => {workHighlights.fourteenth = false;}, 2950)
            break;
        case 'About':
            aboutHighlights.first = true, 300;
            await setTimeout(() => {aboutHighlights.second = true;}, 450)
            await setTimeout(() => {aboutHighlights.third = true;}, 600)
            await setTimeout(() => {aboutHighlights.first = false;}, 1300)
            await setTimeout(() => {aboutHighlights.second = false;}, 1450)
            await setTimeout(() => {aboutHighlights.third = false;}, 1600)
            break;
        case 'Contact':
                await setTimeout(() => {contactHighlights.first = true;}, 500)
                await setTimeout(() => {contactHighlights.first = false;}, 1500)
        default:
            console.error(`lightScroll: scrolling to ${location} which is not a known location`)
    }
}

export function getLightClass(location: String, which: String) {
    switch (location) {
        case 'Work':
            return workHighlights[`${which}` as keyof typeof workHighlights]
        case 'About':
            return aboutHighlights[`${which}` as keyof typeof aboutHighlights]
        case 'Contact':
            return contactHighlights[`${which}` as keyof typeof contactHighlights]
    }
}


