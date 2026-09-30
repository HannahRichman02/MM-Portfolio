<script>
    import { onMount } from 'svelte';

    /** @type {{ use24Hour?: boolean }} */
    let { use24Hour = true } = $props();

    /** @type {Date} */
    let now = $state(new Date());

    /**
     * @param {Date} value
     * @param {boolean} twentyFourHour
     * @returns {string}
     */
    function formatTime(value, twentyFourHour) {
        const rawHours = value.getHours();
        const hours = twentyFourHour ? rawHours : (rawHours % 12 === 0 ? 12 : rawHours % 12);
        const paddedHours = String(hours).padStart(2, '0');
        const paddedMinutes = String(value.getMinutes()).padStart(2, '0');
        return `${paddedHours}:${paddedMinutes}`;
    }

    /**
     * @param {Date} value
     * @returns {string}
     */
    function formatPeriod(value) {
        return value.getHours() < 12 ? 'AM' : 'PM';
    }

    /** @type {string} */
    const displayTime = $derived(formatTime(now, use24Hour));

    /** @type {string} */
    const displayPeriod = $derived(formatPeriod(now));

    onMount(() => {
        /** @type {ReturnType<typeof setInterval>} */
        const timer = setInterval(() => {
            now = new Date();
        }, 1000);

        return () => clearInterval(timer);
    });
</script>

<span class="LiveClock">
    <span class="LiveClockTime">{displayTime}</span>
    {#if !use24Hour}
        <span class="LiveClockPeriod">{displayPeriod}</span>
    {/if}
</span>

<style>
    .LiveClock {
        display: flex;
        align-items: center;
    }

    .LiveClockTime {
        display: block;
    }

    .LiveClockPeriod {
        display: block;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        font-size: 0.4em;
        line-height: 1;
        margin-left: 0.15em;
    }
</style>
