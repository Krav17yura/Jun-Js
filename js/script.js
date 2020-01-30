 window.addEventListener("DOMContentLoaded", function () {
     'use strict';

     // Tab ******************************************************************************************************************

     let infoHeader = document.querySelector('.info-header'),
         infoHeaderTab = document.querySelectorAll('.info-header-tab'),
         infoTabContent = document.querySelectorAll('.info-tabcontent');


     function hideTabContent(a) {
         for (let i = a; i < infoTabContent.length; i++) {
             infoTabContent[i].classList.remove('show');
             infoTabContent[i].classList.add("hide");
         }
     }

     hideTabContent(1);

     function showTabContent(b) {
         if (infoTabContent[b].classList.contains("hide")) {
             infoTabContent[b].classList.remove('hide');
             infoTabContent[b].classList.add("show");
         }
     }


     infoHeader.addEventListener('click', function (event) {
         let target = event.target;
         if (target && target.classList.contains("info-header-tab")) {
             for (let i = 0; i < infoHeaderTab.length; i++) {
                 if (target == infoHeaderTab[i]) {
                     hideTabContent(0);
                     showTabContent(i);
                     break;
                 }
             }
         }

     });
     // ************************************************************************************************************************       
     // Timer ******************************************************************************************************************
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

     //********************************************************************************************************************

     // Modal window 


     let moreBtn = document.querySelector(".more"),
         overlay = document.querySelector(".overlay"),
         closeBtn = document.querySelector(".popup-close");

     moreBtn.addEventListener("click", function () {
         overlay.style.display = "block";
         this.classList.add("more-splash'");
         document.body.style.overflow = 'hidden';

     });

     closeBtn.addEventListener("click", function () {
         overlay.style.display = "none";
         moreBtn.classList.remove("more-splash'");
         document.body.style.overflow = '';
     });


     /*   class options {
           constructor(height,width,bg,fontSize,textAlign){
               this.height = height;
               this.width = width;
               this.bg = bg;
               this.fontSize = fontSize;
               this.textAlign = textAlign;
           }
           
            createDiv (){
          let elem = document.createElement('div');
          document.body.appendChild(elem);

          let parametr = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign}`;
          elem.style.cssText = parametr;
           }

       }

       let item = new options(300, 300, "green", 30, "right");
       item.createDiv(); */

     //json
     /*  let option = {
          width: 1366,
          height: 768,
          background: 'red',
          font : {
              size: "16px",
              color: "red"
          }
      };

      let kek = 'lol';

      console.log(JSON.stringify(kek));
      console.log(JSON.stringify(option));
      console.log(JSON.parse(JSON.stringify(option))); */


     //  ModalFrom

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

         let request = new XMLHttpRequest();

         request.open('POST', 'server.php');
         request.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
         //  request.setRequestHeader('Content-tupe', 'aplication/json');
         let formData = new FormData(form);

         //  let obj = {};
         //  formData.forEach(function(value,key){
         //      obj[key] = value;
         //  });
         // let json = JSON.parse(obj);

         //  request.send(json);
         request.send(formData);

         request.addEventListener("readystatechange", function () {
             if (request.readyState < 4) {
                 statusMassage.innerHTML = message.loading;
             } else if (request.readyState === 4 && request.status == 200) {
                 statusMassage.innerHTML = message.succesful;
             } else {
                 statusMassage.innerHTML = message.fail;
             }
         });

         for (let i = 0; i < input.length; i++) {
             input[i].value = "";
         }
     });

     // Form 

     let massage = {
         loading: "Заргрузка",
         succesful: "Спасибо, мы скоро с вами свяжемся",
         fail: "Error"
     };


     let forma = document.querySelector("#form"),
         inputForm = document.querySelectorAll(".form-last"),
         statusText = document.createElement("div");

         statusText.classList.add("status");

         forma.addEventListener("submit", function(event){
            event.preventDefault();
            forma.appendChild(statusText);

            let request = new XMLHttpRequest();

            request.open('Post', 'server.php');
            request.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
            let formInfa = new FormData(forma);
            

            
         
            request.send(formInfa);


            request.addEventListener("readystatechange", function(){
               if(request.readyState < 4){
                   statusText.innerHTML = massage.loading;
               }else if(request.readyState === 4 && request.status == 200){
                   statusText.innerHTML = massage.succesful;
               }else{
                   statusText.innerHTML = massage.fail;
               }
            });

            for(let i = 0; i<inputForm.length; i++){
                inputForm[i].value = "";
            }

         });
         

         

 });