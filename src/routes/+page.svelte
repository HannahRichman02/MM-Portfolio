<script lang=es>
    import '$lib/styles/contentcard.css'
    import { getGifVersion, restartGif,  getLightClass, lightScroll } from '$lib/styles/evenmore.svelte.ts';
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    /**
     * @type {HTMLButtonElement | null}
     */
    let contactButton = null;

    onMount (() => {
        if (contactButton == null) {
            return
        }
        contactButton.addEventListener('click', function(){
        lightScroll('Contact')
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
        });
    });})
    
    const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const yValues = [2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4];

         /**
         * @type {HTMLButtonElement | null}
         */
    let top = null;

    onMount (() => {
            if (top == null) {
               return
           }
        new Chart(top, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                   backgroundColor: "rgba(117,107,35,1)",
                   data: yValues
               }]
           },
        options: {
            plugins: {
                legend: {display: false},
                title: {display: false},
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
    const wValues = [2, 5, 3, 4, 9, 2, 8, 7, 1, 3, 6, 8, 4];

         /**
         * @type {HTMLButtonElement | null}
         */
    let bot = null;

    onMount (() => {
            if (bot == null) {
               return
           }
        new Chart(bot, {
            type: "bar",
            data: {
                labels: zValues,
                datasets: [{
                   backgroundColor: "rgba(117,107,35,1)",
                   data: wValues
               }]
           },
        options: {
            plugins: {
                legend: {display: false},
                title: {display: false},
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

    const tValues = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];
    const vValues = [25, 35, 60, 40, 55, 10, 20, 75, 50, 30];

         /**
         * @type {HTMLButtonElement | null}
         */
    let line = null;

    onMount (() => {
        if (line == null) {
            return
        }
        new Chart(line, {
            type: "line",
            data: {
                labels: tValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(200,104,41,1)",
                    borderColor: "rgba(200,104,41,1)",
                    data: vValues,
                }]
            },
            options: {
                plugins: {
                    legend: {display: false},
                    title: {display: false},
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
        })
    })

  
</script>
<div class="Header">
    <p class="Welcome">WELCOME IN</p>
    <img src="/Images/Header_Trip.png" class="HeaderTrip" alt="Header Trip">
    <img src="/Images/Header_Bar.png" class="HeaderBar" alt="Header Bar">
    <img src="/Images/HR_Header.png" class="NameTitle" alt="Hannah Richman">
    <a href=#Work_Section class="Work" onmousedown={() => lightScroll("Work")}>Work</a>
    <a href=#About_Section class="About" onmousedown={() => lightScroll("About")}>About</a>
    <button class="Contact" bind:this={contactButton}>Contact</button>
    <canvas bind:this={top} class="BarGraphTop" style="width: 100%;max-width:285px; height:100%;max-height:100px">
    </canvas>
    <canvas bind:this={bot} class="BarGraphBottom" style="width: 100%;max-width:285px; height:100%;max-height:100px">
    </canvas>
</div>
<div class="sleepless-night" id="Work_Section">
    <img src="/Images/Sleepless_Nights_SC.png" class={`SNSC${getLightClass("Work", "first") ? ` highlightborder` : ``}`} alt="Sleepless_Night">
    <p class={`Sleepless${getLightClass("Work", "first") ? ` highlight` : ``}`}>SLEEPLESS</p>
    <p class={`Night${getLightClass("Work", "second") ? ` highlight` : ``}`}>NIGHT</p>
    <img src="/Images/Stars_v02.png" class={`Stars_Line${getLightClass("Work", "second") ? ' highlightorange' : ``}`} alt=Starries>
    <img src="/Images/Cosmic_v03.png" class={`Cosmic_Swirl${getLightClass("Work", "second") ? ' highlightorange' : ``}`} alt=Cosmic-Swirl>
    <img src="/Images/Chevron.png" class={`Chevron${getLightClass("Work", "fourth") ? ' highlightyellow' : ``}`} alt=Chevron>
    <img src="/Images/Button_Timer.png" class={`ButtonTimer${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Timer>
    <img src="/Images/Button_BedTime.png" class={`ButtonBedTime${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Bed-Time>
    <img src="/Images/Button_Moon.png" class={`ButtonMoon${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Moon>
    <img src="/Images/Button_Lock.png" class={`ButtonLock${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Lock>
    <img src="/Images/Button_Wifi.png" class={`ButtonWifi${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Wifi>
    <img src="/Images/Button_Cellular.png" class={`ButtonCellular${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Cellular>
    <p class= {`SN_Description${getLightClass("Work", "third") ? ` highlight` : ``}`}>After Effects<br>Illustration<br>Insomnia<br>Transition<br>Audio<br>Visuals</p>
    <img src="/Images/Planet.png" class={`Planet${getLightClass("Work", "third") ? ' highlightred' : ``}`} alt=Planet>
</div>
<div class="LivingSpaces">
    <a href="/LivingSpaces">
        <img src="/Images/Living_Spaces_Title.png" class={`LS_Title${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces" >
    </a>
    <img src="/Images/Living_Spaces_Light.png" class={`LS_Light01${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces Echo 1">
    <img src="/Images/Living_Spaces_Light.png" class={`LS_Light02${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces Echo 2">
    <img src="/Images/Living_Spaces_Light.png" class={`LS_Light03${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces Echo 3">
    <img src="/Images/Living_Spaces_Light.png" class={`LS_Light04${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces Echo 4">
    <img src="/Images/Living_Spaces_Light.png" class={`LS_Light05${getLightClass("Work", "fifth") ? ' highlightgreen' : ``}`} alt="Living Spaces Echo 5">
    <div class="LS-gif-container">
        {#key getGifVersion('bedroom')}
            <img src="/Images/Bedroom_GIF_Small_SLSU.gif" class={`LS_GIF${getLightClass("Work", "fifth") ? ` highlightborder` : ``}`} alt="Living Spaces Gif" onmouseover={() => restartGif('bedroom')} onfocus={() => restartGif('bedroom')}/>
        {/key}
        <a href="/LivingSpaces">
            <img src="/Images/Living_Spaces_SC.png" class={`LS_SC${getLightClass("Work", "fifth") ? ` highlightborder` : ``}`} alt="Living Spaces Thumbnail" onmouseover={() => restartGif('bedroom')} onfocus={() => restartGif('bedroom')}>
        </a>
    </div>
    <img src="/Images/Stars_v01.png" class={`Stars_01${getLightClass("Work", "seventh") ? ' highlightorange' : ``}`} alt="Stars Contained">
    <p class={`Household${getLightClass("Work", "sixth") ? ` highlight` : ``}`}>HOUSEHOLD</p>
    <img src="/Images/Nokia.png" class={`Nokia${getLightClass("Work", "ninth") ? ` highlightyellow` : ``}`} alt="Nokia">
    <img src="/Images/Play_Bar.png" class={`Play_Bar${getLightClass("Work", "seventh") ? ' highlightred' : ``}`} alt="Play Bar">
    <p class={`Blender${getLightClass("Work", "eighth") ? ' highlightyellowBG' : ``}`}>BLENDER</p>
    <p class={`W${getLightClass("Work", "ninth") ? ` highlight` : ``}`}>2026</p>
    <p class={`Satisfaction${getLightClass("Work", "eighth") ? ` highlight` : ``}`}>Satisfaction</p>
    <p class={`Years${getLightClass("Work", "eighth") ? ` highlight` : ``}`}>Years</p>
    <figure class={`Line-Graph${getLightClass("Work", "eighth") ? ` highlightLG` : ``}`}>
    </figure>
    <canvas bind:this={line} class="LineGraphJS" style="width: 100%;max-width:410px; height:100%;max-height:140px">
    </canvas>
</div>
<div class="Logo_Mania">
    <img src="/Images/Ghostly_Rose.png" class={`GhostlyRose${getLightClass("Work", "tenth") ? ' highlightborder' : ``}`} alt="Ghostly Rose">
    <img src="/Images/Bars.png" class={`BarLines${getLightClass("Work", "tenth") ? ` highlightgreen` : ``}`} alt="BarLines">
    <p class={`Logo${getLightClass("Work", "eleventh") ? ` highlight` : ``}`}>LOGO</p>
    <p class={`Mania${getLightClass("Work", "eleventh") ? ` highlight` : ``}`}>MANIA</p>
    <img src="/Images/Arrows.png" class={`Arrows${getLightClass("Work", "twelfth") ? ` highlightorange` : ``}`} alt="Arrows">
    <img src="/Images/Rectangles.png" class={`Rectangles${getLightClass("Work", "thirteenth") ? ` highlightyellow` : ``}`} alt="Rectangles">
    <img src="/Images/Rectangles_Rotating.png" class={`RRectangles${getLightClass("Work", "twelfth") ? ` highlightgreen` : ``}`} alt="Rotating Rectangles">
    <img src="/Images/Checkers.png" class={`Checkers${getLightClass("Work", "thirteenth") ? ` highlightred` : ``}`} alt="Checkers">
    <img src="/Images/Swirlies.png" class={`Swirlies${getLightClass("Work", "twelfth") ? ` highlightyellow` : ``}`} alt="Swirlies">
    <img src="/Images/Search_Bar.png" class={`SearchBar${getLightClass("Work", "thirteenth") ? ` highlightorange` : ``}`} alt="Search Bar">
    <p class={`Branding${getLightClass("Work", "thirteenth") ? ` highlight` : ``}`}>BRANDING</p>
    <img src="/Images/Gradient_Bar.png" class={`GradientBar${getLightClass("Work", "fourteenth") ? ` highlightgreen` : ``}`} alt="Gradient Bar">
    <p class=FluffWords>Gamertags.................<br>Lupine...........................<br>Davinci Resolve.......<br>Animation....................<br>Graphic Design.........</p>
</div>
<div class="profile">
    <p class="barcode">ANIMATION-MOTION DESIGN-EDITING-ILLUSTRATION</p>
    <img src="/Images/Contact_Profile_01.png" class="Profile_Image" alt="Profile">
    <p class={`ContactFN${getLightClass("About", "first") ? ` highlight` : ``}`} id="About_Section">HANNAH</p>
    <p class={`ContactLN${getLightClass("About", "second") ? ` highlight` : ``}`}>RICHMAN</p>
    <img src="/Images/Star_Line.png" class="StarLine" alt="Star Divider">
    <p class={`Description${getLightClass("About", "third") ? ` highlight` : ``}`}>SCAD graduate with a passion for anything and<br>everything motion and design. From Arizona<br>and based in Nebraska, I love to create pieces<br>that feel inspired and tell stories.</p>
    <img src="/Images/Banner.png" class="Banner" alt="Banner">
    <img src="/Images/Moon_Phases.png" class="Moons" alt="Moon Phases">
    <img src="/Images/Battery_v01.png" class="Battery01" alt="Battery">
    <img src="/Images/Black_Hole_v01.png" class="BlackHole" alt="Black Hole Topography">
    <img src="/Images/Circuits.png" class="Circuits" alt="Circuits">
    <img src="/Images/Record_v01.png" class="Record" alt="Record">
    <img src="/Images/Cosmic_v02.png" class="Cosmic" alt="Cosmic Dust">
    <img src="/Images/Stars.png" class="Stars" alt="Stars">
    <img src="/Images/Check_Engine_Light.png" class="CEL" alt="Check Engine Light">
    <img src="/Images/Battery_v02.png" class="Battery02" alt="Battery Light">
    <img src="/Images/Tire_Pressure.png" class="TirePressure" alt="Tire Pressure Light">
    <img src="/Images/Airbag.png" class="Airbag" alt="Airbag Light">
    <div class="XO"><div class="XOX">XOXOXO</div><br><div class="XOXO">OXOXOX</div><br><div class="XOXOX">XOXOXO</div></div>
    <p class="SCAD">SCAD●2024</p>
    <p class={`Email${getLightClass("Contact", "first") ? ` highlight` : ``}`} id="Contact_Section">hannahrichman.art@gmail.com</p>
    <p class="Copyright">All work © Hannah Richman 2026</p>
</div>