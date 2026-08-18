let gif_bedroom_version: number = $state(0)

function restartGif(which: string) {
    switch(which) {
        case'bedroom':
            gif_bedroom_version =+ 1
            break
        default:
            console.error('Unknown gif version: ${which}')
    }
}

function getGifVersion(which: string): number {
    switch (which) {
        case 'bedroom':
            return gif_bedroom_version
        default:
            console.error('Unknown gif version: ${which}')
            return 0
    }
}

export {getGifVersion, restartGif}