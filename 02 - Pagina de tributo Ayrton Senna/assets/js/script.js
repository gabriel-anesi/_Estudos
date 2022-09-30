window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none'
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
        window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura > 600)
       document.querySelector(".menu nav ul").removeAttribute('style');
    });
    });
};



function scrollPiloto() {
    var scrollDiv = document.getElementById("piloto").offsetTop;
    window.scrollTo({ top: scrollDiv-70 , behavior: 'smooth'});

}

function scrollEstatisticas() {
    var scrollDiv = document.getElementById("estatisticas").offsetTop;
    window.scrollTo({ top: scrollDiv-70 , behavior: 'smooth'});
}

function scrollAcidente() {
    var scrollDiv = document.getElementById("acidente").offsetTop;
    window.scrollTo({ top: scrollDiv-70 , behavior: 'smooth'});
}

function scrollCreditos() {
    var scrollDiv = document.getElementById("referencias").offsetTop;
    window.scrollTo({ top: scrollDiv-70 , behavior: 'smooth'});
}

