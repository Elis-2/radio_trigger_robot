radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        conected = true
    }
})
input.onButtonPressed(Button.A, function () {
    if (test) {
        basic.clearScreen()
        radio.sendValue("left", 1)
        basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (test) {
        basic.clearScreen()
        radio.sendValue("right", 1)
        basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (test) {
        basic.clearScreen()
        radio.sendValue("servo", 1)
        basic.showLeds(`
        # # # . .
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        `)
    }
})
basic.showIcon(IconNames.No)
radio.setGroup(2)
radio.sendString("")
let conected = false
let test = false
let main = false
input.onButtonPressed(Button.AB, function () {
    if (!conected) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Chessboard)
    } else if (test) {
        basic.clearScreen()
        radio.sendValue("fwd", 1)
        basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    } else if (!test) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.Target)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (conected) {
        test = !test
        if (test) {
            basic.showString("T")
        } else {
            basic.showString("E")
        }
    }
})