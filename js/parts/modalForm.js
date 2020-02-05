function modalForm() {
    let message = {
        loading: "Загрузка",
        succesful: "Спасибо, ваша заявка принята",
        fail: "ERROR"
    };

    let form = document.querySelector(".main-form"),
        input = document.querySelectorAll(".popup-form__input"),
        statusMassage = document.createElement("div");

    statusMassage.classList.add("status");


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.appendChild(statusMassage);
        let formData = new FormData(form);

        function postData(data) {
            return new Promise(function (resolve, reject) {



                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
                request.addEventListener("readystatechange", function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }

                });
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }


        postData(formData)
            .then(() => statusMassage.innerHTML = message.loading)
            .then(() => statusMassage.innerHTML = message.succesful)
            .catch(() => statusMassage.innerHTML = message.fail)
            .then(clearInput);
    });
}

module.exports = modalForm;