input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.pause(2000)
    Alarm = 1
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    if (Alarm == 0) {
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
    }
    if (Alarm == 1) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Alarm = 0
})
let Alarm = 0
Alarm = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (Alarm == 0) {
        if (input.isGesture(Gesture.Shake)) {
            music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 200), music.PlaybackMode.UntilDone)
        }
    }
})
basic.forever(function () {
    if (Alarm == 1) {
        if (input.lightLevel() > 0) {
            for (let index = 0; index < 2; index++) {
                music.play(music.stringPlayable("C5 E C5 - C5 E C5 - ", 150), music.PlaybackMode.UntilDone)
            }
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
    }
})
