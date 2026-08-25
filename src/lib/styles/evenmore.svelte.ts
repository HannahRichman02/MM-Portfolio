import Chart from 'chart.js/auto';
import { getRandomInt, lerp, type NavigationButton } from '$lib/utilities.svelte';

/*
* GIF MANAGEMENT
 */

let gifBedroomVersion: number = $state(0);

export function restartGif(which: string): void {
    if (which === 'bedroom') {
        gifBedroomVersion += 1;
        return;
    }

    console.error(`Unknown gif location: ${which}`);
}

export function getGifVersion(which: string): number {
    if (which === 'bedroom') {
        return gifBedroomVersion;
    }

    console.error(`Unknown gif version: ${which}`);
    return 0;
}


/*
* HIGHLIGHT STYLING - SETUP
 */

type WorkHighlightKey =
    | 'first'
    | 'second'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'sixth'
    | 'seventh'
    | 'eighth'
    | 'ninth'
    | 'tenth'
    | 'eleventh'
    | 'twelfth'
    | 'thirteenth'
    | 'fourteenth';
type AboutHighlightKey = 'first' | 'second' | 'third';
type ContactHighlightKey = 'first';

let workHighlights: Record<WorkHighlightKey, boolean> = $state({
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
    fourteenth: false
});

let aboutHighlights: Record<AboutHighlightKey, boolean> = $state({
    first: false,
    second: false,
    third: false
});

let contactHighlights: Record<ContactHighlightKey, boolean> = $state({
    first: false
});

const orangeColor: [number, number, number] = [200, 104, 41];
const yellowColor: [number, number, number] = [251, 224, 111];

let lineChartColor = 'rgba(200, 104, 41, 1)'

/*
* CHART INITIALIZATION
 */

const lineXValues: number[] = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];
let lineYValues: number[] = $state([25, 35, 60, 40, 55, 10, 20, 75, 50, 30]);

let lineChart: Chart<'line', number[], number> | null = null;
let lineIntervalId: ReturnType<typeof setInterval> | null = null;

export function lineCanvasAction(node: HTMLCanvasElement): { destroy: () => void } {
    lineChart = new Chart(node, {
        type: 'line',
        data: {
            labels: lineXValues,
            datasets: [
                {
                    fill: false,
                    tension: 0,
                    backgroundColor: 'rgba(200, 104, 41, 1)',
                    borderColor: 'rgba(200, 104, 41, 1)',
                    pointBackgroundColor: 'rgba(200, 104, 41, 1)',
                    pointBorderColor: 'rgba(200, 104, 41, 1)',
                    pointRadius: 3,
                    pointHoverRadius: 3,
                    data: [...lineYValues]
                }
            ]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });

    startLineAnimation();
    updateLineChart();

    return {
        destroy: () => {
            stopLineAnimation();
            if (lineChart != null) {
                lineChart.destroy();
                lineChart = null;
            }
        }
    };
}

/*
* LINE CHART STATE MANAGEMENT
 */

function applyLineChartState(mode: 'none' | 'active' = 'none'): void {
    if (lineChart == null) {
        return;
    }

    if (lineChart.options.elements == null) {
        lineChart.options.elements = {};
    }

    if (lineChart.options.elements.point == null) {
        lineChart.options.elements.point = {};
    }

    lineChart.data.datasets[0].data = [...lineYValues];
    lineChart.data.datasets[0].borderColor = lineChartColor;
    lineChart.data.datasets[0].backgroundColor = lineChartColor;
    lineChart.data.datasets[0].pointBackgroundColor = lineChartColor;
    lineChart.data.datasets[0].pointBorderColor = lineChartColor;
    lineChart.options.elements.point.backgroundColor = lineChartColor;
    lineChart.options.elements.point.borderColor = lineChartColor;

    const lineMeta = lineChart.getDatasetMeta(0);
    for (const pointElement of lineMeta.data) {
        pointElement.options.backgroundColor = lineChartColor;
        pointElement.options.borderColor = lineChartColor;
    }

    lineChart.update(mode);
}

function updateLineChart(): void {
    applyLineChartState('none');
}

function randomizeWholeArray(): void {
    const nextValues: number[] = [...lineYValues];

    for (let index: number = 0; index < nextValues.length; index += 1) {
        nextValues[index] = getRandomInt(10, 75);
    }

    lineYValues = nextValues;
}

/*
* LINE CHART ANIMATION
 */

function startLineAnimation(): void {
    if (lineIntervalId != null) {
        clearInterval(lineIntervalId);
    }

    lineIntervalId = setInterval(() => {
        randomizeWholeArray();
        updateLineChart();
    }, 1500);
}

function stopLineAnimation(): void {
    if (lineIntervalId == null) {
        return;
    }

    clearInterval(lineIntervalId);
    lineIntervalId = null;
}

function animateChartColor(from: [number, number, number], to: [number, number, number], duration: number = 1000): void {
    if (lineChart == null) {
        return;
    }

    const startTime: number = performance.now();

    function frame(now: number): void {
        const progress: number = Math.min((now - startTime) / duration, 1);
        const r: number = lerp(from[0], to[0], progress);
        const g: number = lerp(from[1], to[1], progress);
        const b: number = lerp(from[2], to[2], progress);

        lineChartColor = `rgba(${r}, ${g}, ${b}, 1)`;
        applyLineChartState('none');

        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}

/*
* NAVIGATION - HIGHLIGHT ANIMATION
 */

export function lightScroll(location: string): void {
    switch (location) {
        case 'Work':
            workHighlights.first = true;
            setTimeout(() => {workHighlights.second = true;}, 150);
            setTimeout(() => {workHighlights.third = true;}, 300);
            setTimeout(() => {workHighlights.fourth = true;}, 450);
            setTimeout(() => {workHighlights.fifth = true;}, 600);
            setTimeout(() => {workHighlights.sixth = true;}, 750);
            setTimeout(() => {workHighlights.seventh = true;}, 900);
            setTimeout(() => {workHighlights.first = false;}, 1000);
            setTimeout(() => {workHighlights.eighth = true;}, 1050);
            setTimeout(() => {animateChartColor(orangeColor, yellowColor, 1000); }, 1050);
            setTimeout(() => {workHighlights.second = false;}, 1150);
            setTimeout(() => {workHighlights.ninth = true;}, 1200);
            setTimeout(() => {workHighlights.third = false;}, 1300);
            setTimeout(() => {workHighlights.tenth = true;}, 1350);
            setTimeout(() => {workHighlights.fourth = false;}, 1450);
            setTimeout(() => {workHighlights.eleventh = true;}, 1500);
            setTimeout(() => {workHighlights.fifth = false;}, 1600);
            setTimeout(() => {workHighlights.twelfth = true;}, 1650);
            setTimeout(() => {workHighlights.sixth = false;}, 1750);
            setTimeout(() => {workHighlights.thirteenth = true;}, 1800);
            setTimeout(() => {workHighlights.seventh = false;}, 1900);
            setTimeout(() => {workHighlights.fourteenth = true;}, 1950);
            setTimeout(() => {workHighlights.eighth = false;}, 2050);
            setTimeout(() => {animateChartColor(yellowColor, orangeColor, 1000);}, 2050);
            setTimeout(() => {workHighlights.ninth = false;}, 2200);
            setTimeout(() => {workHighlights.tenth = false;}, 2350);
            setTimeout(() => {workHighlights.eleventh = false;}, 2500);
            setTimeout(() => {workHighlights.twelfth = false;}, 2650);
            setTimeout(() => {workHighlights.thirteenth = false;}, 2800);
            setTimeout(() => {workHighlights.fourteenth = false;}, 2950);
            break;
        case 'About':
            aboutHighlights.first = true;
            setTimeout(() => {aboutHighlights.second = true;}, 450);
            setTimeout(() => {aboutHighlights.third = true;}, 600);
            setTimeout(() => {aboutHighlights.first = false;}, 1300);
            setTimeout(() => {aboutHighlights.second = false;}, 1450);
            setTimeout(() => {aboutHighlights.third = false;}, 1600);
            break;
        case 'Contact':
            setTimeout(() => {contactHighlights.first = true;}, 500);
            setTimeout(() => {contactHighlights.first = false;}, 1500);
            break;
        default:
            console.error(`lightScroll: scrolling to ${location} which is not a known location`);
    }
}

export function getLightClass(location: string, which: string): boolean {
    switch (location) {
        case 'Work':
            return workHighlights[which as WorkHighlightKey] ?? false;
        case 'About':
            return aboutHighlights[which as AboutHighlightKey] ?? false;
        case 'Contact':
            return contactHighlights[which as ContactHighlightKey] ?? false;
        default:
            return false;
    }
}

/*
* NAVIGATION - BUTTONS and ANCHORS
 */


function contactButtonClick(): void {
    lightScroll('Contact');
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

const workButton: NavigationButton = {
    isButton: false,
    text: 'Work',
    location: '#Work_Section',
    style: 'Work',
    func: () => {
        lightScroll('Work');
    }
};

const aboutButton: NavigationButton = {
    isButton: false,
    text: 'About',
    location: '#About_Section',
    style: 'About',
    func: () => {
        lightScroll('About');
    }
};

const contactButton: NavigationButton = {
    isButton: true,
    text: 'Contact',
    location: null,
    style: 'Contact',
    func: () => {
        contactButtonClick();
    }
};

export const navigationButtons: NavigationButton[] = [workButton, aboutButton, contactButton];

/*
* MISC
 */

export const headerText: string = 'WELCOME IN';