function busca(){
    var x = document.getElementById("select").value;
    if(x == 0){
        alert("Por favor selecione alguma opção!");
        document.getElementById("href").href= "#"
    }
    else{
        if(x == 10){
            document.getElementById("href").href= "#pulseiras"
        }
        if(x == 20){
            document.getElementById("href").href= "#colares"
        }
        if(x == 30){
            document.getElementById("href").href= "#aneis"
        }
        if(x == 40){
            document.getElementById("href").href= "#tornozeleiras"
        }
        if(x == 50){
          document.getElementById("href").href= "#strap"
      }
    }
    
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}