let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let botao = document.querySelector("#btn");
let txtDoPopUp = document.querySelector("#txtDoPopUp");
let btnFecharPopup = document.querySelector("#btnFecharPopup");
let problemaEmail = "";
let problemasSenha = "";

// Verifica se os campos de inputs estão vazios
function verificaCamposInput() {
  //Valida email em tempo real
  email.addEventListener("input", () => {
    const emails = email.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(emails)) {
      email.style.color = "#049dd9";
      email.style.border = "2px solid #049dd9";
      problemaEmail = "";
    } else {
      email.style.color = "red";
      email.style.border = "2px solid red";
      // //Caso o email esteja incorreto, adionar o valor verdadeiro para verificar quando o cliente clicar em logar/cadastrar
      problemaEmail = true;
    }
  });

  //Valida se a senha tem quantidade minima de caracteres permitidas em tempo real
  senha.addEventListener("input", () => {
    if (senha.value.length < 8) {
      senha.style.color = "red";
      senha.style.border = "2px solid red";
      //Caso senha esteja incorreta, adionar o valor verdadeiro para verificar quando o cliente clicar em logar/cadastrar
      problemasSenha = true;
    } else {
      senha.style.color = "#049dd9";
      senha.style.border = "2px solid #049dd9";
      problemasSenha = "";
    }
  });

  // Quando é clicado no botão de login/cadastro verifica os campos
  botao.addEventListener("click", () => {
    event.preventDefault();
    //Verifica se possui inputs vazios
    if (email.value != "" && senha.value != "") {
      //Verifica se o email informado foi validado
      if (problemaEmail == true) {
        const popup = document.getElementById("popup");
        popup.style.display = "flex";
        txtDoPopUp.textContent = "O email informado não é válido";
        //Verifica se a senha informada foi validada
      } else if (problemasSenha == true) {
        const popup = document.getElementById("popup");
        popup.style.display = "flex";
        txtDoPopUp.textContent =
          "A senha informada possui menos de 8 caracteres";
        //se estiver tudo OK vai seguir com a logica do banco que vai ser adicionada abaixo
      } else {
        alert("Todos os campos preenchidos");
        console.log("deu certo");
      }
    } else {
      //Se possuir campos vazios passa a mensagem para preencher todos os campos
      const popup = document.getElementById("popup");
      popup.style.display = "flex";
      txtDoPopUp.textContent = "Preencha todos os campos!";
    }
  });
}

// Fecha o popup
function fecharPoup() {
  btnFecharPopup.addEventListener("click", () => {
    event.preventDefault();
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  });
}

fecharPoup();
verificaCamposInput();
