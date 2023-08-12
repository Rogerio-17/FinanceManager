function auth(email, senha) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then((response) => {
        // Exibe atela de carregamento
        showLoading()

        //Direciona para Pagina principal
        window.location.href = "/FinanceManager/main.html";
    })
    .catch((error) => {

     //Usuario e senha incorretos
      if (error.code == "auth/user-not-found") {
        erroDeLogin.innerHTML = "Usúario não foi encontrado";
        senha.style.color = "red";
        senha.style.border = "2px solid red";

        email.style.color = "red";
        email.style.border = "2px solid red";

        // Senha incorreta
      } else if (error.code == "auth/wrong-password") {
        erroDeLogin.innerHTML = "Senha incorreta";
        senha.style.color = "red";
        senha.style.border = "2px solid red";

        // Erro de rede
      } else if (error.code == "auth/network-request-failed")  {
        erroDeLogin.innerHTML = "Erro na conexão! Verifique sua rede."

        // Caso dê erro desconhecido
      } else {
        erroDeLogin.innerHTML = "Erro desconheido " + error.message;
      }
    });
}
