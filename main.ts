let temperatuur = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
loops.everyInterval(50000, function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
