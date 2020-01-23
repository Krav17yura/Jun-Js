let menu = document.getElementsByClassName("menu")[0],
    menuItems = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    advert = document.getElementsByClassName("adv")[0],
    box = document.getElementById("prompt");
 
 

  div = document.createElement("div");
  div.classList.add("menu-item");
  div.textContent = "Пятый элемент";
  menu.appendChild(div);

 menu.insertBefore(menuItems[2], menuItems[1]);

 document.body.style.backgroundImage = "url('img/apple_true.jpg')";

 title.textContent = "Мы продаем только подлинную технику Apple";

 advert.remove();

 let answer = prompt ("Введите отношение к технике apple");
 box.textContent = answer;