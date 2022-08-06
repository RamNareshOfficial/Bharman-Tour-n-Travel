let menu_btn = document.getElementsByClassName("fa-bars")[0];
let menu_list = document.getElementById("menu_list");

menu_btn.addEventListener("click", ()=>{
    menu_list.classList.toggle("ul_active")
});
