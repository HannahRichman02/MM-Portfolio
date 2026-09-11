<script>
    import '$lib/styles/sncontentcard.css'
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
    <Header header_text="PROJECT 1" buttons={BTH} />
</div>
<div class="SN_Title">
    <p class="TitleSleepless">SLEEPLESS</p>
    <p class="TitleNight">NIGHT</p>
    <img src="/Images/SN_BG_Top.png" class="TopDeco" alt=TopDeco>
</div>
<div class="VideoMain">
    <div class="VidPlaceholder">
        <video controls>
            <source src="https://vimeo.com/1225829112?fl=pl&fe=sh" type="video/mp4" class="PicPlaceHolder">
        </video>
    </div>
    <div class="CLeftPlacement">
        <div class="ChevronLeft"></div>
    </div>
    <div class="CRightPlacement">
        <div class="ChevronRight"></div>
    </div>
</div>
<div class="DescriptionSN">
    <img src="/Images/SN_BG_Mid.png" class="MidDeco" alt=MidDeco>
    <p class="ProjectDesc">This was a project done in my senior year<br>of college that sparked my interest and<br>love for motion media. After an insomnia<br>diagnosis in 2020, staying up until the sun<br>rose became a regular occurence for me<br>and I wanted to take this project to<br>capture the dichotomy between loving late<br>nights and the endless effort that became<br>falling asleep.</p>
    <div class="Calendar"></div>
    <div class="Clock">16:20</div>
    <p class="DesignFramesTitle">DESIGN FRAMES</p>
    <div class="Gallery">
        <div class="GalleryTrack">
            <img src="/Images/Clock.jpg" class="IClock" alt=IClock>
            <img src="/Images/Dark_Fright.jpg" class="IDarkFright" alt=IDarkFright>
            <img src="/Images/Endless_Plight.jpg" class="IEndlessPlight" alt=IEndlessPlight>
            <img src="/Images/Grab.jpg" class="IGrab" alt=IGrab>
            <img src="/Images/KO.jpg" class="IKO" alt=IKO>
            <img src="/Images/Late_Night.jpg" class="ILateNight" alt=ILateNight>
            <img src="/Images/Mic_Drop.jpg" class="IMicDrop" alt=IMicDrop>
            <img src="/Images/Sisyphus.jpg" class="ISisyphus" alt=ISisyphus>
            <img src="/Images/Sleepless_Night.jpg" class="ISleeplessNight" alt="ISleeplessNight">
        </div>
    </div>
</div>
<div class="SNFooter">
    <img src="/Images/SN_BG_Bottom.png" class="BotDeco" alt=BotDeco>
    <a href="#Top" class="GTT2">Go To Top</a>
    <a href="/" class=RTH2>Return To Home</a>
    <p class="Email2">hannahrichman.art@gmail.com</p>
</div>