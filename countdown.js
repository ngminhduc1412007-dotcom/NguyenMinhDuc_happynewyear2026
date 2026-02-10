// Ngày Tết Âm 2026 (Bính Ngọ) - 17/02/2026
const tetAm2026 = new Date("2026-02-17T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tetAm2026 - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>🎉 Chúc mừng năm mới Bính Ngọ 2026 🎉</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Chạy ngay khi load
updateCountdown();

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);