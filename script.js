window.onload = () => {
    start();
}
function start() {
    const head = document.querySelector(".label-head");
    const body = document.querySelector(".label-body");
    const leg = document.querySelector(".label-leg");
    let weapons = {
        classic: ["78 at 30m<br>66 over 30m", "26 at 30m<br>22 over 30m", "26 at 30m<br>22 over 30m"],
        shorty: ["36 at 9m<br>24over 10-15m", "12 at 9m<br>3over 10-15m", "10 at 9m<br>2over 10-15m"],
        frenzy: ["78 at 20m<br>63 over 20m", "26 at 20m<br>21 over 20m", "22 at 20m<br>17 over 20m"],
        ghost: ["105 at 30m<br>88 over 30m", "30 at 30m<br>25 over 30m", "26 at 30m<br>21 over 30m"],
    };
    clickGuns(head, body, leg, weapons);
}
function clickGuns(head, body, leg, weapons) {
    const guns = [...document.querySelectorAll(".guns")];
    guns.forEach(gun => {
        gun.addEventListener('click', (event) => {
            const name = event.target.innerText.toLowerCase();
            head.innerHTML = weapons[name][0];
            leg.innerHTML = weapons[name][2];
            body.innerHTML = weapons[name][1];
        });
    });
}