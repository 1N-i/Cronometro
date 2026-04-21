let segundo = 0, minuto = 0, hora = 0;
let andando = false;

const timeDisplay = document.getElementById("time");
const allTimeDisplay = document.getElementById("total-display");
const symbolBtn = document.getElementById("symbol");

let segundoTotal = Number(localStorage.getItem("segundosSalvos")) || 0;
let minutoTotal = Number(localStorage.getItem("minutosSalvos")) || 0;
let horaTotal = Number(localStorage.getItem("horasSalvos")) || 0;
updateTotalDisplay()

function toggleTimer() {
    andando = !andando;
    symbolBtn.innerHTML = andando ? "⏸" : "▶"; //condição ? valor_se_verdadeiro : valor_se_falso

    if (!andando) {
        salvarProgresso();
        updateDisplay();
        updateTotalDisplay();
    }
}

setInterval(() => {
    if (andando) {
        segundo += 1;
        if (segundo >= 60) {
            segundo = 0;
            minuto += 1;
        } 
        if (minuto >= 60) {
            minuto = 0;
            hora += 1;
        }
        updateDisplay();
    }
}, 1000);

function salvarProgresso() {
    segundoTotal += segundo;
    minutoTotal += minuto;
    horaTotal += hora;

    localStorage.setItem("segundosSalvos", segundoTotal);
    localStorage.setItem("minutosSalvos", minutoTotal);
    localStorage.setItem("horasSalvos", horaTotal);
    
    segundo = 0; minuto = 0; hora = 0;
}

function updateDisplay() {
    const h = hora.toString().padStart(2, "0");
    const m = minuto.toString().padStart(2, "0");
    const s = segundo.toString().padStart(2, "0");

    timeDisplay.innerHTML = (hora > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
}

function updateTotalDisplay() {
    const h = horaTotal.toString().padStart(2, "0");
    const m = minutoTotal.toString().padStart(2, "0");
    const s = segundoTotal.toString().padStart(2, "0");

    allTimeDisplay.innerHTML = (horaTotal > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
}

window.addEventListener("beforeunload", (event) => {
    salvarProgresso();
});