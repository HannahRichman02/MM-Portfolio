<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

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
     * @param {number} min
     * @param {number} max
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomizeWholeArray() {
        let array = vValues
        for (let index = 0; index < array.length; index++) {
            array[index] = getRandomInt(10, 75)
        }
        vValues = array
    }

</script>

<div class="Header">
    <p class="Welcome">WELCOME IN</p>
    <img src="/Images/Header_Trip.png" class="HeaderTrip" alt="Header Trip">
    <img src="/Images/Header_Bar.png" class="HeaderBar" alt="Header Bar">
    <img src="/Images/HR_Header.png" class="NameTitle" alt="Hannah Richman">
    <div class="Buttons">
        <a href=#Work_Section class="Work" onmousedown={() => lightScroll("Work")}>Work</a>
        <a href=#About_Section class="About" onmousedown={() => lightScroll("About")}>About</a>
        <button class="Contact" bind:this={contactButton}>Contact</button>
    </div>
    <div class="BarGraphs">
        <canvas bind:this={top} class="BarGraphTop" width="285">
        </canvas>
        <canvas bind:this={bot} class="BarGraphBottom">
        </canvas>
    </div>
</div>