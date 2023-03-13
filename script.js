const hour = document.querySelector("#hrtime");
const min = document.querySelector("#mintime");
const sec = document.querySelector("#sectime");
const ampm = document.querySelector("#ampm");


function calcTime() {
    let time = new Date();
    let hr = time.getHours();
    let mi = time.getMinutes();
    let se = time.getSeconds();

    if (hr > 12) {
        hr = hr - 12;
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (mi < 10) {
        mi = "0" + mi;
    }

    if (se < 10) {
        se = "0" + se;
    }

    hour.innerHTML = hr;
    min.innerHTML = mi;
    sec.innerHTML = se;

    setTimeout(calcTime, 1000)

}
calcTime()