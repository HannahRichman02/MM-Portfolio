<script>

import '$lib/styles/lscontentcard.css'
import Header from '../Header/Header.svelte';


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
    <Header header_text="PROJECT 2" buttons={BTH} />
</div>
<div class="LivingSpacesProject">
    <img src="/Images/Living_Spaces_BG.png" class="LS_Sections" alt=LivingSpacesSection>
    <div class="VideoContainer">
        <img src="/Images/Bedroom_GIF_Small.gif" class="BGIf" alt=BGIF>
    </div>
    <p class="Description1">A collection of<br>rooms built and<br>blender to get<br>the feel of a<br>fresh, new<br>space. This<br>project was a<br>super fun test<br>of my 3D<br>knowledge and<br>pushed my<br>creativity and<br>problem solving<br>skills to the limit.</p>
    <p class="Number2">N°002</p>
    <p class="Blender1">BLENDER</p>
    <p class="Living">LIVING</p>
    <p class="Spaces">SPACES</p>
    <div class="SketchContainer">
        <img src="/Images/Rooms_Sketch_v01.png" class="RoomSketch" alt=RoomSketch>
    </div>
    <p class="Description2">I started each section by<br>sketching each room and timing<br>out the movements in 2D, which<br>allows for a much smoother and<br>quicker process in 3D. It also<br>gives me a clear vision of what I'm<br>looking for so any adjustments<br>that need to be made stay in line<br>with the overall picture.</p>
    <img src="/Images/Palette_Vertical.png" class="VPalette" alt=PaletteVertical>
    <div class="SketchVidContainer">
        <img src="/Images/Rooms_Sketch_v01.png" class="SketchVid" alt=SketchVid>
    </div>
    <p class="Description3">Each room came with it's<br>own challenges. Taking a<br>project from 2D to 3D<br>often requires pushing<br>boundaries and learning<br>different ways of<br>accomplishing similar<br>results while keeping<br>everything cohesive and<br>flowing smoothly.</p>
    <a href="#Top" class="GTT">Go To Top</a>
    <a href="/" class=RTH>Return To Home</a>
    <p class="Email1">hannahrichman.art@gmail.com</p>
</div>