music.onEvent(MusicEvent.MelodyStarted, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.isGesture(Gesture.Shake)) {
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 200), music.PlaybackMode.UntilDone)
    }
})
