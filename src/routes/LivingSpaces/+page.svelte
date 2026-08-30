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

<Header header_text="PROJECT 2" buttons={BTH}/>
<div class="LivingSpacesProject">
    <img src="/Images/Living_Spaces_BG.png" class="LS_Sections" alt=LivingSpacesSection>
    <div class="VideoContainer">
        <img src="/Images/Bedroom_GIF_Small.gif" class="BGIf" alt=BGIF>
    </div>
    <p class="Description1">A collection of<br>rooms built and<br>blender to get<br>the feel of a<br>fresh, new<br>space. This<br>project was a<br>super fun test<br>of my 3D<br>knowledge and<br>pushed my<br>creativity and<br>problem solving<br>skills to the limit.</p>
    <p class="Number2">N°002</p>
    <p class="Blender">BLENDER</p>
    <p class="Living">LIVING</p>
    <p class="Spaces">SPACES</p>
    <div class="SketchContainer">
        <img src="/Images/Rooms_Sketch_v01.png" class="RoomSketch" alt=RoomSketch>
    </div>
</div>