
const weddingDate = new Date("2025-08-17T00:00:00").getTime();
const timerElement = document.getElementById("timer");
function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timerElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}
setInterval(updateTimer, 1000);
