let hour, minute, second
hour = minute = second = 0
const chrono = document.getElementById("time")
const symbol = document.getElementById("symbol")
let started = false

function time() {
    started = !started;
    if (symbol.innerHTML === "▶") {
        symbol.innerHTML = "⏸"
    } else {
        symbol.innerHTML = "▶"
    }
}

setInterval(() => {
    if (started === true) {
        second += 1;
        if (second >= 60) {
            second -= 60;
            minute += 1;
        } if (minute >= 60) {
            minute -= 60;
            hour += 1;
        }

        const h = hour.toString().padStart(2, "0");
        const m = minute.toString().padStart(2, "0");
        const s = second.toString().padStart(2, "0");

        if (h === "00") {
            chrono.innerHTML = `${m}:${s}`;
        } else {
        chrono.innerHTML = `${h}:${m}:${s}`;
        }
    }
}, 1000);

function addTime() {
    second += 60
    minute += 1
}