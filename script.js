/*const bts = document.querySelector('.bt');
const box = document.querySelector('.box');
const d5 = "50";
bts.addEventListener('click', function () {
    box.classList.add("box2");
    box.classList.remove("box");
    box.innerHTML = d5;
});*/
const head = document.querySelector(".label-head");
const body = document.querySelector(".label-body");
const leg = document.querySelector(".label-leg");
let clacssic = {
    damageAt30: [78, 26, 22],
    damageOver30: [66, 22, 18],
};
const classicAt = document.querySelector(".classicAt");
classicAt.addEventListener('click', () => {
    head.innerHTML = clacssic.damageAt30[0];
    body.innerHTML = clacssic.damageAt30[1];
    leg.innerHTML = clacssic.damageAt30[2];
})
const classicOver = document.querySelector(".classicOver");
classicOver.addEventListener('click', () => {
    head.innerHTML = clacssic.damageOver30[0];
    body.innerHTML = clacssic.damageOver30[1];
    leg.innerHTML = clacssic.damageOver30[2];
})