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

    /** @type {string} */
    const displayTime = $derived(formatTime(now, use24Hour));

    onMount(() => {
        /** @type {ReturnType<typeof setInterval>} */
        const timer = setInterval(() => {
            now = new Date();
        }, 1000);

        return () => clearInterval(timer);
    });
</script>

<span class="LiveClockTime">{displayTime}</span>

<style>
    .LiveClockTime {
        display: block;
    }
</style>
