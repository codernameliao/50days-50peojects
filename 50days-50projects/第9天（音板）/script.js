const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
var btns = document.querySelectorAll("button")
    // var sounds = document.querySelectorAll("audio")
btns.forEach((btn, index) => {
    let sound = sounds[index]
    btn.addEventListener('click', () => {
        stopSongs()
            // sounds[index].play()
        document.getElementById(sound).play()
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
            // 暂停
        song.pause()
            //当前音频的进度归零
        song.currentTime = 0
    })
}