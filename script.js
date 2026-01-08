// 1. Typewriter Effect
const phrases = ["Java Developer", "Problem Solver", "Backend Learner"];
let pIdx = 0; let cIdx = 0;
const textEl = document.getElementById("typewriter");

function type() {
    if (cIdx < phrases[pIdx].length) {
        textEl.textContent += phrases[pIdx].charAt(cIdx);
        cIdx++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}
function erase() {
    if (cIdx > 0) {
        textEl.textContent = phrases[pIdx].substring(0, cIdx - 1);
        cIdx--;
        setTimeout(erase, 50);
    } else {
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(type, 500);
    }
}
window.onload = type;

// 2. Scroll Reveal Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// 3. Popup Controls
function openImg(src) {
    document.getElementById("popup-img").src = src;
    document.getElementById("imgPopup").style.display = "flex";
}
function closeImg() {
    document.getElementById("imgPopup").style.display = "none";
}

function openResume() {
    document.getElementById("resumePopup").style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeResume() {
    document.getElementById("resumePopup").style.display = "none";
    document.body.style.overflow = "auto";
}