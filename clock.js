function Clock(options) {
    var elem = options.elem
    var timer;

    function render() {
        var date = new Date()

        var hour = date.getHours()
        var mins = date.getMinutes()
        var second = date.getSeconds()

        if (hour < 10) { hour = '0' + hour }
        elem.querySelector('.hour').innerHTML = hour;

        elem.querySelector('.mins').innerHTML = mins;
        if (mins < 10) { mins = '0' + mins }
        elem.querySelector('.sec').innerHTML = second;
        if (second < 10) { second = '0' + second }
    }

    this.start = function () {
        render()
        timer = setInterval(render, 1000)
    }


    this.stop = function () {
        clearInterval(timer)
    }
}