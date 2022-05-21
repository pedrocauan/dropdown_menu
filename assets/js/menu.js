const btnMobile = document.querySelector(".btn-mobile"); //botao q troca o menu
const menuMobile = document.querySelector("#menu"); //o menu


//Inicialmente o menu começa fechado, logo, ele nao tem a classe open, logo contains retorna false
const isClose = (menu) => !menu.classList.contains("open"); //ele ta fechado se NÃO TEM a classe OPEN
const isOpen = (menu) => menu.classList.contains("open"); //ele ta aberto se TEM a classe OPEN
//abre  e fecha o menu quando clica no botao
btnMobile.addEventListener("click", () => {

    //O menu ta fechado ???
    if(isClose(menuMobile))
    {
        menuMobile.classList.add("open") //Abre ele !!
        return;
    }

    //O menu ta aberto ???
    if(isOpen(menuMobile))
    {
        menuMobile.classList.remove("open") //FECHA ele !!
        return;
    }
});