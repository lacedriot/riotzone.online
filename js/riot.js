clickToEnter.addEventListener("click", () => {
    clickToEnter.remove()
})

const TEXTS = [
    "@29z_",
    "top no namer",
    "# TeenX",
    "# Zone"
]

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms))
}

async function doType(text) {
    typedOut.innerText = ""

    for (let i = 0; i < text.length; i++) {
        typedOut.innerText = text.slice(0, i + 1)
        await sleep(100)
    }
    await sleep(1000)

    while (typedOut.innerText.length !== 0) {
        typedOut.innerText = typedOut.innerText.slice(0, typedOut.innerText.length - 1)
        await sleep(50)
    }
}

async function typeloop() {
    while (true) {
        for (let i = 0; i < TEXTS.length; i++) {
            await doType(TEXTS[i])
        }
    }
}

typeloop()

function showSongLengthProgressBar() {

    let len_percent = Math.round((audio.currentTime / audio.duration) * 20);
    let before = len_percent;
    let after = Math.max(19 - len_percent, 0);
    let minutes = Math.round(audio.currentTime / 60);
    let seconds = audio.currentTime % 60;
    let max_minutes = Math.round(audio.duration / 60);
    let max_seconds = audio.duration % 60;
    song_len.innerText = "-".repeat(before) + "*" + "-".repeat(after) + " " + minutes + ":" + seconds.toFixed(0).padStart(2, "0") + "/" + max_minutes + ":" + max_seconds.toFixed(0).padStart(2, "0")
    requestAnimationFrame(showSongLengthProgressBar)
}

showSongLengthProgressBar()

let counter = 0,
    Title = 'restrictt loloolo', // website title
    direction = true
setInterval(function () {
    if (counter == Title.length) {
        direction = false
    }
    if (counter == false) {
        direction = true
    }
    counter = direction == true ? ++counter : --counter
    newtitle = counter == 0 ? '' : Title.slice(0, counter)
    document.title = '' + newtitle
}, 400)

audio.onended = () => {
    audio.currentTime = 0
    audio.play()
}

video.disablePictureInPicture = true
