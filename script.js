window.onload = () => {
    start();
}
function start() {
    const head = document.querySelector(".label-head");
    const body = document.querySelector(".label-body");
    const leg = document.querySelector(".label-leg");
    const score = document.querySelector(".score");
    let weapons = {
        classic: ["78 < 30m<br>66 > 30m", "26 < 30m<br>22 > 30m", "26 < 30m<br>22 > 30m"],
        shorty: ["36 < 9<br>24 (10-15m)", "12 < 9<br>3 (10-15m)", "10 < 9<br>2 (10-15m)"],
        frenzy: ["78 at 20m<br>63 over 20m", "26 at 20m<br>21 over 20m", "22 at 20m<br>17 over 20m"],
        ghost: ["105 < 30m<br>88 > 30m", "30 < 30m<br>25 > 30m", "26 < 30m<br>21 > 30m"],
        sheriff: ["160 < 30m<br>145 > 30m", "55 < 30m<br>50 > 30m", "47 < 30m<br>43 > 30m"],
        stinger: ["67 < 20m<br>62 > 20m", "27 < 20m<br>25 > 20m", "23 < 20m<br>21 > 20m"],
        spectre: ["78 < 20m<br>66 > 20m", "26 < 20m<br>22 > 20m", "22 < 20m<br>18 > 20m"],
        bulldog: ["116", "35", "30"],
        guardian: ["195", "65", "49"],
        phantom: ["156 <15m<br>140 (16-30m)<br>124 (31-50m)", "39 <15m<br>35 (16-30m)<br>31 (31-50m)", "33 <15m<br>30 (16-30m)<br>26 (31-50m)"],
        vandal: ["156", "39", "33"],
        marshal: ["202", "101", "85"],
        operator: ["255", "150", "127"],
        bucky: ["44 (0-8m)<br>34 (8-12m)<br>18 (12-50m)", "22 (0-8m)<br>17 (8-12m)<br>9 (12-50m)", "19 (0-8m)<br>14 (8-12m)<br>8 (12-50m)"],
        judge: ["34 (0-10m)<br>26 (10-15m)<br>20 (15-50m)", "17 (0-10m)<br>13 (10-15m)<br>10 (15-50m)", "14 (0-10m)<br>11 (10-15m)<br>9 (15-50m)"],
        ares: ["72 < 30m<br>67 > 30m", "30 < 30m<br>28 > 30m", "25 < 30m<br>23 > 30m"],
        odin: ["95 < 30m<br>77 > 30m", "38 < 30m<br>31 > 30m", "32 < 30m<br>26 > 30m"],
    };
    clickGuns(head, body, leg, weapons, score);
}
function clickGuns(head, body, leg, weapons, score) {
    const guns = [...document.querySelectorAll(".guns")];
    guns.forEach(gun => {
        gun.addEventListener('click', (event) => {
            const name = event.target.innerText.toLowerCase();
            head.innerHTML = weapons[name][0];
            leg.innerHTML = weapons[name][2];
            body.innerHTML = weapons[name][1];
            score.innerHTML = name.toUpperCase();
        });
    });
}