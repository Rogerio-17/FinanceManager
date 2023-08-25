function auth(email, senha) {
  // Exibe atela de carregamento
  showLoading();
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then((response) => {
      //Fecha tela de carregamento
      hideLoading();
      //Direciona para Pagina principal
      window.location.href = "/FinanceManager/main.html";
    })
    .catch((error) => {
      //Fecha tela de carregamento
      hideLoading();

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
      } else if (error.code == "auth/network-request-failed") {
        erroDeLogin.innerHTML = "Erro na conexão! Verifique sua rede.";

        // Caso dê erro desconhecido
      } else {
        erroDeLogin.innerHTML = "Erro desconheido " + error.message;
      }
    });
}
