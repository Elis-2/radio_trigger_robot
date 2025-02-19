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
basic.forever(function () {
	
})
