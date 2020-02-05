function timer() {
    let deadLine = '2020-01-31';

    function getTimerDate(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            "minutes": minutes,
            "hours": hours
        };
    }


    function setTimerDate(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds"),
            timeInterval = setInterval(updateImterval, 1000);

        function firstNumberZero(num) {
            if (num <= 9) {
                return "0" + num;
            } else {
                return num;
            }
        }

        function updateImterval() {
            let t = getTimerDate(endtime);
            hours.textContent = firstNumberZero(t.hours);
            minutes.textContent = firstNumberZero(t.minutes);
            seconds.textContent = firstNumberZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }

        }

    }

    setTimerDate("timer", deadLine);
}

module.exports = timer;