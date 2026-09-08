import SimpleCalendarJs from 'simple-calendar.js/auto';

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CLOCK
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

let clock = document.querySelector('.Clock')

let hours : number = $state(new Date().getHours());
let minutes : number = $state(new Date().getMinutes());

export function initialize(): void {
    $effect(() => {
        const interval = setInterval(() => {
            hours = new Date().getHours();
            hours = hours < 10 ? 0 + hours : hours;
        }, 1000);

        return () => clearInterval(interval);
    })

    $effect(() => {
        const interval = setInterval(() => {
            minutes= new Date().getMinutes();
            minutes = minutes < 10 ? 0 + minutes : minutes;
        }, 1000);

        return () => clearInterval(interval);
    })
}


export function updateTime() {
    if (clock) {
            clock.innerHTML = '${hours}:${minutes}';
        } 
    }
    

setTimeout(updateTime, 1000);

updateTime();