function descobrirSigno() {
  let data = document.getElementById("data").value;

  if (!data) {
    alert("Selecione uma data!");
    return;
  }

  let dia = new Date(data).getDate();
  let mes = new Date(data).getMonth() + 1;

  let signo = "";

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Áries - Coragem e liderança!";
  } 
  else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Touro - Força e persistência!";
  } 
  else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Gêmeos - Inteligência e adaptação!";
  } 
  else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Câncer - Emoção e proteção!";
  } 
  else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leão - Poder e liderança!";
  } 
  else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgem - Estratégia e precisão!";
  } 
  else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra - Equilíbrio e justiça!";
  } 
  else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpião - Intensidade e poder!";
  } 
  else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Sagitário - Liberdade e aventura!";
  } 
  else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = "Capricórnio - Disciplina e foco!";
  } 
  else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = "Aquário - Inovação e rebeldia!";
  } 
  else {
    signo = "Peixes - Sensibilidade e intuição!";
  }

  document.getElementById("resultado").innerText = signo;
}