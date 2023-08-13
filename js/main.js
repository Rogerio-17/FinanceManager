let logout = document.querySelector("#logout");
// Desloga o usuario
function deslogar() {
  logout.addEventListener("click", () => {
    console.log("clicou");
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "/FinanceManager/login.html";
      })
      .catch(() => {
        const popup = document.getElementById("popup");
        popup.style.display = "flex";
        txtDoPopUp.textContent = "Erro ao tentar deslogar";
      });
  });
}

// Bloqueia o acesso de usuarios que tentem acessar a main estando sem autenticação no firebase
function bloquearAcesso() {
  //Vai ficar buscando de tempos em tempos o status da validação do usuario
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (!user) {
      window.location.href = "/FinanceManager/login.html";
    }
  });
}

// Criação do grafico
function grafico() {
  const ctx = document.getElementById("myChart");
  let valoresEntrantes = [120, 1900, 20, 0, 0, 0];
  let valoresSaintes = [200, 300, 700, 600, 200, 106];
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25", "Dia 30"],
      datasets: [
        {
          label: "#Entradas",
          data: valoresEntrantes,
          borderWidth: 2,
          borderColor: "#0a02f0",
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "#Saídas",
          data: valoresSaintes,
          borderWidth: 2,
          borderColor: "#ff0303",
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });
}

grafico();
bloquearAcesso();
deslogar();
