import Chart from 'chart.js/auto';
import { getRandomInt, type NavigationButton } from '$lib/utilities.svelte';

export type HeaderProps = {
    header_text: string;
    buttons: NavigationButton[];
};

const topXValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const bottomXValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let topYValues: number[] = [2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4];
let bottomYValues: number[] = [2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4];

let topGraph: Chart<'bar', number[], number> | null = null;
let bottomGraph: Chart<'bar', number[], number> | null = null;

let topIntervalId: ReturnType<typeof setInterval> | null = null;
let bottomIntervalId: ReturnType<typeof setInterval> | null = null;

function createBarChart(node: HTMLCanvasElement, labels: number[], data: number[]): Chart<'bar', number[], number> {
    return new Chart(node, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    backgroundColor: 'rgba(117,107,35,1)',
                    data: [...data]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
}

function randomizePointArray(source: number[]): void {
    const nextValues: number[] = [...source];
    const index: number = getRandomInt(0, nextValues.length - 1);

    nextValues[index] = getRandomInt(1, 9);

    for (let offset: number = 0; offset < source.length; offset += 1) {
        source[offset] = nextValues[offset];
    }
}

function updateBarChart(chart: Chart<'bar', number[], number>, values: number[]): void {
    chart.data.datasets[0].data = [...values];
    chart.update('none');
}

export function topCanvasAction(node: HTMLCanvasElement): { destroy: () => void } {
    topGraph = createBarChart(node, topXValues, topYValues);

    topIntervalId = setInterval(() => {
        randomizePointArray(topYValues);

        if (topGraph != null) {
            updateBarChart(topGraph, topYValues);
        }
    }, 100);

    return {
        destroy: () => {
            if (topIntervalId != null) {
                clearInterval(topIntervalId);
                topIntervalId = null;
            }

            if (topGraph != null) {
                topGraph.destroy();
                topGraph = null;
            }
        }
    };
}

export function bottomCanvasAction(node: HTMLCanvasElement): { destroy: () => void } {
    bottomGraph = createBarChart(node, bottomXValues, bottomYValues);

    bottomIntervalId = setInterval(() => {
        randomizePointArray(bottomYValues);

        if (bottomGraph != null) {
            updateBarChart(bottomGraph, bottomYValues);
        }
    }, 100);

    return {
        destroy: () => {
            if (bottomIntervalId != null) {
                clearInterval(bottomIntervalId);
                bottomIntervalId = null;
            }

            if (bottomGraph != null) {
                bottomGraph.destroy();
                bottomGraph = null;
            }
        }
    };
}
