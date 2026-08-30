<script lang="ts">
    import { bottomCanvasAction, topCanvasAction, type HeaderProps } from './Header.svelte.ts';
    import '$lib/styles/header.css'
    let { header_text, buttons }: HeaderProps = $props();
</script>

<div class="Header">
    <p class="Welcome">{header_text}</p>
    <img src="/Images/Header_Trip.png" class="HeaderTrip" alt="Header Trip">
    <img src="/Images/Header_Bar.png" class="HeaderBar" alt="Header Bar">
    <img src="/Images/HR_Header.png" class="NameTitle" alt="Hannah Richman">
    <div class="Buttons">
        {#each buttons as button}
            {#if button.isButton}
                <button class={button.style} onmousedown={button.func ?? undefined}>{button.text}</button>
            {:else}
                <a href={button.location ?? ''} class={button.style} onmousedown={button.func ?? undefined}>{button.text}</a>
            {/if}
        {/each}
    </div>
    <div class="BarGraphs">
        <canvas use:topCanvasAction class="BarGraphTop" width="285">
        </canvas>
        <canvas use:bottomCanvasAction class="BarGraphBottom">
        </canvas>
    </div>
</div>