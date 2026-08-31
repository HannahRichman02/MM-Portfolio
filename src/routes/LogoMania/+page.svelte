<script>

import '$lib/styles/lmcontentcard.css'
import Header from '../Header/Header.svelte';

let GRSelected = $state(true);
let lupineSelected = $state(false);

    /**
     * @param {string} which
     */
function toggleButton(which) {
    GRSelected = false;
    lupineSelected = false;

    switch(which) {
        case 'GR':
            GRSelected = true;
            break;
        case 'Lupine':
            lupineSelected = true;
            break;
    }
}



 const backToHome = {
        isButton: false,
        text: "Back To Home",
        location: "/",
        style: "BackToHome",
        func: null,
    }

const BTH = [ backToHome ]


</script>

<div id="Top">
    <Header header_text="PROJECT 3" buttons={BTH} />
</div>
<div class="Main">
    <div class="LogosVideoContainer">
            <img src="/Images/SN_GIF1.gif" class="Placeholder" alt=VidPlaceholder>
    </div>
    <p class="LOGOTitle">L<br>O<br>G<br>O</p>
    <p class="MANIATitle">MANIA</p>
    <img src="/Images/LM_Lines.png" class="LMLines" alt=LMLines>
    <p class="LMDescription">A collection of animated logos for softwares, gamertags and businesses.</p>
    <button class={`GRButton ${GRSelected ? 'GRSelected' : ''}`} onmousedown={() => toggleButton('GR')}>Ghostly Rose</button>
    <button class={`LButton ${lupineSelected ? 'LSelected' : ''}`} onmousedown="{() => toggleButton('Lupine')}">Lupine</button>
    <button class="RRButton">Retro Rainbow</button>
    <button class="HPButton">HappyPants</button>
    <button class="KButton">Kurokamori</button>
</div>
{#if GRSelected}
<div class="GhostlyRoseSection">
    <img src="/Images/LM_GR_BG.png" class="GRBG" alt=GRBG>
    <img src="/Images/GR_Logo_Ideation_01.png" class="GRIdeation1" alt=GRIdeation1>
    <p class="Step1">STEP 1</p>
    <p class="Step1Desc">For the first step I started with simple,<br>blocked out shapes and general ideas to<br>begin narrowing things down to match the<br>customer's vision. He decided to move<br>fowards with font #3 and logo #5.</p>
    <p class="GRName">GHOSTLY ROSE</p>
</div>
{/if}
{#if lupineSelected}
<div class="LupineSection">
    <p style="color: white;">This is a placeholder</p>
</div>
{/if}