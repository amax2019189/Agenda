function loguear(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if(user == "Alejandro" && pass == "123"){
        window.location = "../assets/Pages/listar.html";
    }else{
        alert("Datos incorrectos");
    }
}