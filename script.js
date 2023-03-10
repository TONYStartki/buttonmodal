var modal1 = document.getElementById("modal")
var btn = document.getElementById("openModalBtn")
var span = document.getElementsByClassName("close")[0]


btn.onclick = function (){
    modal1.style.display = "block"
}

span.onclick = function (){
    modal1.style.display ="none"
}
window.onclick = function(event){
    if(event.target === modal1){
        modal1.style.display="none"
        console.log("Windows target poups")
    }
}