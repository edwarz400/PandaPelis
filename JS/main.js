var anna = document.querySelector("#anna");
var malefica = document.querySelector("#malefica");
var metros = document.querySelector("#metros")
var blood = document.querySelector("#blood")
var annaframe = document.querySelector(".peli1frame")
var maleframe = document.querySelector(".peli2frame")
var metrosframe = document.querySelector(".peli3frame")
var bloddframe = document.querySelector(".peli4frame")
var num = 1;
var peli = "";

document.querySelector(".imganna").addEventListener("click", () => {
    //console.log("ancho" + screen.width)
    //console.log("alto" + screen.height)
    var altura = screen.height;
    var division = altura / 3;
    console.log(anna.getBoundingClientRect().top)
    window.scrollBy(0, malefica.getBoundingClientRect().top);
    console.log(window.pageYOffset);
})
document.querySelector(".imgmalefica").addEventListener("click", () => {
    var altura = screen.height;
    var division = altura / 3;
    console.log(malefica.getBoundingClientRect().top)
    window.scrollBy(0, metros.getBoundingClientRect().top);
    console.log(window.pageYOffset);
})
document.querySelector(".imgmetro").addEventListener("click", () => {
    var altura = screen.height;
    var division = altura / 3;
    console.log(blood.getBoundingClientRect().top)
    window.scrollBy(0, blood.getBoundingClientRect().top);
    console.log(window.pageYOffset);
})

// Frames

document.querySelector(".peli1").addEventListener("click", () => {
    if (num != 1) {
        document.querySelector(".loader" + num).setAttribute("hidden", "true")
        document.querySelector(".peli" + num + "frame").removeAttribute("src")
        document.querySelector(".peli" + num).removeAttribute("hidden")
        document.querySelector(".close" + num).setAttribute("hidden", "true")
        document.querySelector("#" + peli + " .frame").removeAttribute("style")
    }
    document.querySelector("#anna .frame").setAttribute("style", "background-color:white;")
    document.querySelector(".loader1").removeAttribute("hidden")
    annaframe.setAttribute("src", "https://drive.google.com/file/d/1lkGfdYuli8dkgdJ3VCXsO3ffVJPES7p_/preview")
    document.querySelector(".close1").removeAttribute("hidden")
    document.querySelector(".peli1").setAttribute("hidden", "true")
    num = 1;
    peli = "anna";
})

document.querySelector(".peli2").addEventListener("click", () => {
    if (num != 2 && num != 1) {
        document.querySelector(".loader" + num).setAttribute("hidden", "true")
        document.querySelector(".peli" + num + "frame").removeAttribute("src")
        document.querySelector(".peli" + num).removeAttribute("hidden")
        document.querySelector(".close" + num).setAttribute("hidden", "true")
        document.querySelector("#" + peli + " .frame").removeAttribute("style")
    }
    document.querySelector("#malefica .frame").setAttribute("style", "background-color:white;")
    document.querySelector(".loader2").removeAttribute("hidden")
    maleframe.setAttribute("src", "https://drive.google.com/file/d/14wbB1-L62U5t9_uURTYxzfHe7Uulf-2K/preview")
    document.querySelector(".close2").removeAttribute("hidden")
    document.querySelector(".peli2").setAttribute("hidden", "true")
    num = 2;
    peli = "malefica";
})

document.querySelector(".peli3").addEventListener("click", () => {
    if (num != 3 && num != 1) {
        document.querySelector(".loader" + num).setAttribute("hidden", "true")
        document.querySelector(".peli" + num + "frame").removeAttribute("src")
        document.querySelector(".peli" + num).removeAttribute("hidden")
        document.querySelector(".close" + num).setAttribute("hidden", "true")
        document.querySelector("#" + peli + " .frame").removeAttribute("style")
    }
    document.querySelector("#metros .frame").setAttribute("style", "background-color:white;")
    document.querySelector(".loader3").removeAttribute("hidden")
    metrosframe.setAttribute("src", "https://mega.nz/embed/YB1BQSLJ#Rf2yg9beslHm6Ex8evce2pt1y6_7OJy7GtCw6M22NEE")
    document.querySelector(".close3").removeAttribute("hidden")
    document.querySelector(".peli3").setAttribute("hidden", "true")
    num = 3;
    peli = "metros";
})

document.querySelector(".peli4").addEventListener("click", () => {
    if (num != 4 && num != 1) {
        document.querySelector(".loader" + num).setAttribute("hidden", "true")
        document.querySelector(".peli" + num + "frame").removeAttribute("src")
        document.querySelector(".peli" + num).removeAttribute("hidden")
        document.querySelector(".close" + num).setAttribute("hidden", "true")
        document.querySelector("#" + peli + " .frame").removeAttribute("style")
    }
    document.querySelector("#blood .frame").setAttribute("style", "background-color:white;")
    document.querySelector(".loader4").removeAttribute("hidden")
    bloddframe.setAttribute("src", "https://drive.google.com/file/d/1hxL3ffbNhARHcBM2p-vlpxyozhF6OdEg/preview")
    document.querySelector(".close4").removeAttribute("hidden")
    document.querySelector(".peli4").setAttribute("hidden", "true")
    num = 4;
    peli = "blood";
})

function cerrar() {
    document.querySelector("#" + peli + " .frame").removeAttribute("style")
    document.querySelector(".loader" + num).setAttribute("hidden", "true")
    document.querySelector(".peli" + num + "frame").removeAttribute("src")
    document.querySelector(".peli" + num).removeAttribute("hidden")
    document.querySelector(".close" + num).setAttribute("hidden", "true")
}



// MALEFICA: 
// ANNA  "https://jetload.net/e/XyGTKdZKagW4
// METROS https://vidlox.me/embed-lhfucgespcpy.html
// Blosdshot https://jetload.net/e/SScMITYZ6ihN