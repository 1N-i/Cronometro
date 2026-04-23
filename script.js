let segundo = 0, minuto = 0, hora = 0;
let andando = false;

const timeDisplay = document.getElementById("time");
const allTimeDisplay = document.getElementById("total-display");
const symbolBtn = document.getElementById("symbol");

let segundoTotalSalvo = Number(localStorage.getItem("segundosSalvos")) || 0;
let segundoTotal = segundoTotalSalvo;
let minutoTotal = 0, horaTotal = 0;
convertTime();
updateTotalDisplay();

setInterval(() => {
    if (andando) {
        segundo += 1;
        if (segundo >= 60) {
            segundo -= 60;
            minuto += 1;
        } 
        if (minuto >= 60) {
            minuto -= 60;
            hora += 1;
        }
        updateDisplay();
    }
}, 1000);

function toggleTimer() {
    andando = !andando;
    symbolBtn.innerHTML = andando ? "⏸" : "▶"; //condição ? valor_se_verdadeiro : valor_se_falso

    if (!andando) {
        salvarProgresso();
        updateDisplay();
        updateTotalDisplay();
    }
}

function salvarProgresso() {
    segundoTotalSalvo += segundo + (minuto * 60) + (hora * 3600);
    localStorage.setItem("segundosSalvos", segundoTotalSalvo);
    convertTime();
    segundo = 0; minuto = 0; hora = 0;
}

function convertTime() {
    segundoTotal = segundoTotalSalvo;
    minutoTotal = 0, horaTotal = 0;
    while (segundoTotal >= 60){
        segundoTotal -= 60;
        minutoTotal += 1;
    }
    while (minutoTotal >= 60){
        minutoTotal -= 60;
        horaTotal += 1;
    }
}

function updateDisplay() {
    const h = hora.toString().padStart(2, "0");
    const m = minuto.toString().padStart(2, "0");
    const s = segundo.toString().padStart(2, "0");
    timeDisplay.innerHTML = (hora > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
}

function updateTotalDisplay() {
    convertTime();
    const h = horaTotal.toString().padStart(2, "0");
    const m = minutoTotal.toString().padStart(2, "0");
    const s = segundoTotal.toString().padStart(2, "0");
    allTimeDisplay.innerHTML = (horaTotal > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
}

function restartTimer() {
    const confirmacao = confirm("Deseja zerar o Cronômetro?");
    if (confirmacao) {
        segundoTotalSalvo = 0;
        salvarProgresso();
        updateTotalDisplay();
    }
}

window.addEventListener("beforeunload", (event) => {
    salvarProgresso();
});