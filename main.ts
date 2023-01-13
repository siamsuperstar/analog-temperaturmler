basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    basic.pause(500)
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
})
