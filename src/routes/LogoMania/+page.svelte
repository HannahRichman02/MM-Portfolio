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

<div id="TopLM">
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
    <img src="/Images/GR_Logo_Ideation.png" class="GRIdeation1" alt=GRIdeation1>
    <p class="Step1">STEP 1</p>
    <p class="Step1Desc">For the first step I started with simple,<br>blocked out shapes and general ideas to<br>begin narrowing things down to match the<br>customer's vision. He decided to move<br>fowards with font #3 and logo #5.</p>
    <p class="GRName">GHOSTLY ROSE</p>
    <img src="/Images/GR_Logo_Ideation_01.png" class="GRIdeation2" alt=GRIdeation2>
    <p class="Step2">STEP 2</p>
    <p class="Step2Desc">After discussion from the previous options, it was<br>requested to add leaves to the chosen design. I<br>further refined the shape language and added some<br>leaf options as well as presenting some more font<br>variations, of which text #2 and icon #3 were chosen.</p>
    <img src="/Images/GR_Logo_Ideation_03.png" class="GRIdeation3" alt=GRIdeation3>
    <img src="/Images/GR_Logo_Ideation_04.png" class="GRIdeation4" alt=GRIdeation4>
    <img src="/Images/GR_Logo_Ideation_05.png" class="GRIdeation5" alt=GRIdeation5>
    <p class="Step3Desc">After the previous selection, I moved forward with color and further refinement on<br>the text. #3 was preferred for the text and numbers 2, 4 and 5 were the final color<br>choices. The final choice was between #7, #8 and #9, with #7 being the final design.<br>From there we went forth with the animation in which the client asked for a spiritual<br>and nature inspired design.</p>
    <p class="Step3">STEP 3</p>
    <a href="#TopLM" class="LMGRGTT">Go To Top</a>
    <a href="/" class="LMGRRTH">Return To Home</a>
    <p class="LMGREmail">hannahrichman.art@gmail.com</p>
    <img src="/Images/Chevron.png" class="GRChevron" alt=GRChevron>
</div>
{/if}
{#if lupineSelected}
<div class="LupineSection">
    <p style="color: white;">This is a placeholder</p>
</div>
{/if}