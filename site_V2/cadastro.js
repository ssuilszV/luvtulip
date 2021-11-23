const btn = document.getElementById("btn");
const password = document.getElementById("password");

btn.addEventListener("mousedown", function(){
       
    password.setAttribute("type", "text");
        this.style.opacity = "1"
})

btn.addEventListener("mouseup", function(){
    password.setAttribute("type", "password");

    this.style.opacity = ".4";
})