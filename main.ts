radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
})
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
        # # # . .
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        `)
})
basic.showIcon(IconNames.No)
radio.setGroup(2)
radio.sendString("")
let conected = false
let test = false
let main = false
input.onButtonPressed(Button.AB, function () {
    if (!conected){
        radio.sendNumber(0)
    }else if (test){
    basic.clearScreen()
    radio.sendValue("fwd", 1)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    }else if (!test){
        radio.sendNumber(2)
        basic.showIcon(IconNames.Target)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function() {
    test = !test
})