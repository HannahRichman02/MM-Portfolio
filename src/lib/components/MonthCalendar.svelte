<script>
    /** @type {{ date?: Date }} */
    let { date = new Date() } = $props();

    /** @type {string[]} */
    const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    /** @type {string[]} */
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    /**
     * @param {Date} forDate
     * @returns {(number | null)[]}
     */
    function buildDayCells(forDate) {
        const year = forDate.getFullYear();
        const month = forDate.getMonth();
        const leadingBlanks = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        /** @type {(number | null)[]} */
        const cells = [];
        for (let i = 0; i < leadingBlanks; i++) {
            cells.push(null);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            cells.push(day);
        }
        while (cells.length % 7 !== 0) {
            cells.push(null);
        }
        return cells;
    }

    /** @type {(number | null)[]} */
    const dayCells = $derived(buildDayCells(date));
    /** @type {string} */
    const monthLabel = $derived(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
</script>

<div class="MonthCalendar">
    <div class="MonthCalendarTitle">{monthLabel}</div>
    <div class="MonthCalendarGrid">
        {#each weekdayLabels as label, index (index)}
            <div class="MonthCalendarWeekday">{label}</div>
        {/each}
        {#each dayCells as day, index (index)}
            <div class="MonthCalendarDay">{day ?? ''}</div>
        {/each}
    </div>
</div>

<style>
    .MonthCalendar {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        user-select: none;
    }

    .MonthCalendarTitle {
        text-align: center;
        font-weight: 700;
        padding: 0.25rem 0;
    }

    .MonthCalendarGrid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-rows: 1fr;
        flex: 1;
    }

    .MonthCalendarWeekday {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }

    .MonthCalendarDay {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
