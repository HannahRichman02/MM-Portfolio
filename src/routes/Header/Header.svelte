<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import {getRandomInt} from '$lib/utilities.svelte.ts';
    import '$lib/styles/header.css'

    let {header_text, buttons } = $props();

    const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let yValues = $state([2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4]);

     /**
     * @type {HTMLButtonElement | null}
     */
    let top = null;

    /**
     * @type {Chart<"bar", number[], number>}
     */
    let topGraph;

    onMount (() => {
            if (top == null) {
               return
           }
        topGraph = new Chart(top, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                   backgroundColor: "rgba(117,107,35,1)",
                   data: $state.snapshot(yValues),
               }]
           },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {display: false},
                title: {display: false},
                tooltip: {enabled: false},
            },
            scales: {
                x: {
                    ticks: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        display: false,
                    }
                }
            }
        }
       });
    });


    const zValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let wValues = [2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4];

     /**
     * @type {HTMLButtonElement | null}
     */
    let bot = null;

    /**
     * @type {Chart<"bar", number[], number>}
     */
    let botGraph;

    onMount (() => {
            if (bot == null) {
               return
           }
        botGraph = new Chart(bot, {
            type: "bar",
            data: {
                labels: zValues,
                datasets: [{
                   backgroundColor: "rgba(117,107,35,1)",
                   data: $state.snapshot(wValues)
               }]
           },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {display: false},
                title: {display: false},
                tooltip: {enabled: false},
            },
            scales: {
                x: {
                    ticks: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        display: false,
                    }
                }
            }
        }
       });
    });

    $effect(() => {
         if (topGraph && botGraph ) {
            const barTopRawData = $state.snapshot(yValues);
            const barBotRawData = $state.snapshot(wValues);

            topGraph.data.datasets[0].data = barTopRawData;
            botGraph.data.datasets[0].data = barBotRawData;

            topGraph.update();
            botGraph.update();
        }
    })

    /**
     * @param {number[]} which
     */
    function randomizePointArray(which) {
        let array = which
        let index = getRandomInt(0, array.length - 1)
        array[index] = getRandomInt(1, 9)
        which = array
    }

    const intervalBarBot = setInterval(() => randomizePointArray(yValues), 100);
    const intervalBarTop = setInterval(() => randomizePointArray(wValues), 100);

</script>


{#snippet navButton(/** @type {boolean} */ isButton, /** @type {string} */ text, /** @type {string} */ location, /** @type {string} */ style, /** @type {any} */ func)}
    {#if isButton}
        <button class={style} onmousedown={func}>{text}</button>
    {:else}
            {#if func}
                <a href={location} class={style} onmousedown={func}>{text}</a>
            {:else}
                <a href={location} class={style}>{text}</a>
            {/if}
    {/if}
{/snippet}

<div class="Header">
    <p class="Welcome">{header_text}</p>
    <img src="/Images/Header_Trip.png" class="HeaderTrip" alt="Header Trip">
    <img src="/Images/Header_Bar.png" class="HeaderBar" alt="Header Bar">
    <img src="/Images/HR_Header.png" class="NameTitle" alt="Hannah Richman">
    <div class="Buttons">
        {#each buttons as button}
            {@render navButton(button.isButton, button.text, button.location, button.style, button.func)}
        {/each}
    </div>
    <div class="BarGraphs">
        <canvas bind:this={top} class="BarGraphTop" width="285">
        </canvas>
        <canvas bind:this={bot} class="BarGraphBottom">
        </canvas>
    </div>
</div>