let segundo = Number(localStorage.getItem("segundosSalvos")) || 0;
let minuto = Number(localStorage.getItem("minutosSalvos")) || 0;
let hora = Number(localStorage.getItem("horasSalvos")) || 0;
let andando = false;

const chronoDisplay = document.getElementById("time");
const symbolBtn = document.getElementById("symbol");

//Atualiza o tempo total
const allTimeDisplay = document.getElementById("total-display");
const h = hora.toString().padStart(2, "0");
const m = minuto.toString().padStart(2, "0");
const s = segundo.toString().padStart(2, "0");
allTimeDisplay.innerHTML = (hora > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;

function toggleTimer() {
    andando = !andando;
    symbolBtn.innerHTML = andando ? "⏸" : "▶"; //condição ? valor_se_verdadeiro : valor_se_falso

    if (!andando) {
        localStorage.setItem("segundosSalvos", segundo);
        localStorage.setItem("minutosSalvos", minuto);
        localStorage.setItem("horasSalvos", hora);
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

function updateDisplay() {
    const h = hora.toString().padStart(2, "0");
    const m = minuto.toString().padStart(2, "0");
    const s = segundo.toString().padStart(2, "0");

    // Mostra horas apenas se for maior que 0
    chronoDisplay.innerHTML = (hora > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
}