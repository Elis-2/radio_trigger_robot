radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
basic.showIcon(IconNames.No)
radio.setGroup(2)
radio.sendString("")
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendValue("left", 1)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendValue("fwd", 1)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendValue("right", 1)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    radio.sendValue("servo", 1)
    basic.showLeds(`
        # # # # #
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        `)
})