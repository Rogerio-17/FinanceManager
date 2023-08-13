let logout = document.querySelector("#logout")
// Desloga o usuario
function deslogar(){
    logout.addEventListener("click", () => {
        console.log("clicou")
        firebase.auth().signOut().then(() => {
        window.location.href = "/FinanceManager/login.html"
        }).catch(() => {
            const popup = document.getElementById("popup");
            popup.style.display = "flex";
            txtDoPopUp.textContent = "Erro ao tentar deslogar";
        })
    })
}

// Bloqueia o acesso de usuarios que tentem acessar a main estando sem autenticação no firebase
  function bloquearAcesso(){
    //Vai ficar buscando de tempos em tempos o status da validação do usuario
     firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        if(!user){
            window.location.href = "/FinanceManager/login.html"
        } 
    })
}

bloquearAcesso()
deslogar()