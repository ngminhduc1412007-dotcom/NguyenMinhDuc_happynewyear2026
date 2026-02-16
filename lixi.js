let daQuay = false;

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");
spinBtn.addEventListener("click", spin);
function spin() {
    if (daQuay) {
        alert("Bạn đã quay rồi!");
        return;
    }
    daQuay = true;
    let index = Math.floor(Math.random() * 6);
    let trung = Math.random() < 0.01;
    let gocMoiO = 360 / 6;
    let degree = 360 * 5 + (index * gocMoiO) + (gocMoiO / 2);
    wheel.style.transform = "rotate(" + degree + "deg)";
    setTimeout(function () {
        if (trung) {
            result.innerHTML = "Chúc mừng! Bạn được lì xì bởi Minh Đức🧧";
            document.getElementById("claimBtn").style.display = "block";
        } else {
            result.innerHTML = "Đen thế không được lì xì hehehe";
        }
    }, 4000);
}