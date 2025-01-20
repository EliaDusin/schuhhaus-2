def on_button_a():
    global Alarm
    basic.pause(2000)
    Alarm = 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_melody_started():
    if Alarm == 0:
        basic.show_leds("""
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            """)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            """)
    if Alarm == 1:
        for index in range(4):
            basic.show_leds("""
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                """)
            basic.show_leds("""
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                """)
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
music.on_event(MusicEvent.MELODY_STARTED, on_melody_started)

def on_button_b():
    global Alarm
    Alarm = 0
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Alarm = 0
Alarm = 0

def on_forever():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    if Alarm == 0:
        if input.is_gesture(Gesture.SHAKE):
            music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 200),
                music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)

def on_forever2():
    if Alarm == 1:
        if input.light_level() > 0:
            for index2 in range(2):
                music.play(music.string_playable("C5 E C5 - C5 E C5 - ", 150),
                    music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever2)
