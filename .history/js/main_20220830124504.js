window.onload = () =>{
    console.log("Iniciando documento");
    circleButton()
}

function circleButton(){
    console.log("Cambiando informacion...");
    document.querySelector('#medium-icon').innerText = "Medium section";
    document.querySelector('#small-section').innerText = "Small section";
    document.querySelector('#big-section').innerText = "Big section";
}