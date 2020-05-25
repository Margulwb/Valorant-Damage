window.onload = () => {
    start();
}
function start() {
    const head = document.querySelector(".label-head");
    const body = document.querySelector(".label-body");
    const leg = document.querySelector(".label-leg");
    let weapons = { //i can't do reference
        classic: ["78 at 30m<br>66 over 30m", "26 at 30m<br>22 over 30m", "26 at 30m<br>22 over 30m"],
        shorty: ["36 at 9m<br>24over 10-15m", "12 at 9m<br>3over 10-15m", "10 at 9m<br>2over 10-15m"],
        frenzy: ["78 at 20m<br>63 over 20m", "26 at 20m<br>21 over 20m", "22 at 20m<br>17 over 20m"],
    };
    clickGuns(head, body, leg, weapons);
}
function clickGuns(head, body, leg, weapons) {
    const classic = document.querySelector(".classic");
    classic.addEventListener('click', () => {
        head.innerHTML = weapons.classic[0];
        body.innerHTML = weapons.classic[1];
        leg.innerHTML = weapons.classic[2];
    });
    const shorty = document.querySelector(".shorty");
    shorty.addEventListener('click', () => {
        head.innerHTML = weapons.shorty[0];
        body.innerHTML = weapons.shorty[1];
        leg.innerHTML = weapons.shorty[2];
    });
    const frenzy = document.querySelector(".frenzy");
    frenzy.addEventListener('click', () => {
        head.innerHTML = weapons.frenzy[0];
        body.innerHTML = weapons.frenzy[1];
        leg.innerHTML = weapons.frenzy[2];
    });
}