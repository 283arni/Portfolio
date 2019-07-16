import { directive } from "babel-types";

(function() {
  
  const btnMenu = document.querySelector(".mini-menu__click");
  const menu = document.querySelector("#menu").innerHTML;

  function creatElem() {
    
    const div = document.createElement("div");
    div.classList.add("menu");
    div.innerHTML = menu;

    const containerMenu = div.querySelector(".menu__overflow");
    const close = div.querySelector(".menu__wrapper");
    
    close.addEventListener("click", () => {
      document.body.removeChild(div);
    });

    containerMenu.addEventListener("click", (e) => {
      if(e.target === containerMenu) {
        close.click();
      }
    });

    return div;
  }

  btnMenu.addEventListener("click", () => {
    const modal = creatElem();
    document.body.appendChild(modal);
    setTimeout(() => {
      modal.classList.add("menu_open");
    }, 50);
  });
})();