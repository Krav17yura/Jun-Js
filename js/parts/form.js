function fonm (){
    let massage = {
        loading: "Заргрузка",
        succesful: "Спасибо, мы скоро с вами свяжемся",
        fail: "Error"
    };


    let forma = document.querySelector("#form"),
        inputForm = document.querySelectorAll(".form-last"),
        statusText = document.createElement("div");

    statusText.classList.add("status");

    forma.addEventListener("submit", function (event) {
        event.preventDefault();
        forma.appendChild(statusText);
        let formData = new FormData(forma);

        function postData(data) {
            return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();

            request.open('Post', 'server.php');
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

        function clearPole() {
            for (let i = 0; i < inputForm.length; i++) {
                inputForm[i].value = "";
            }
        }
        postData(formData)
           .then(()=> statusText.innerHTML = massage.loading)
           .then(()=> statusText.innerHTML = massage.succesful)
           .catch(()=> statusText.innerHTML = massage.fail)
           .then(clearPole);

    });
}

module.exports = fonm;