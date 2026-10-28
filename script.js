
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbxPHunjxkKRLvmB6-DAK5Tb5rxzvDF05gJbvci5nixehMY4oTw4JaO6KNSKzhwzt5NT/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const botao = document.getElementById("botao");

form.addEventListener("submit", async function(evento) {
  evento.preventDefault();

  if (!form.reportValidity()) return;

  aviso.textContent = "Enviando seu cadastro...";
  botao.disabled = true;
  botao.textContent = "Enviando...";

  try {
    await fetch(URL_PLANILHA, {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    });

    aviso.textContent =
      "Solicitação enviada. Confira se o cadastro apareceu na planilha.";
    form.reset();

  } catch (erro) {
    aviso.textContent =
      "Não foi possível enviar. Verifique sua conexão e tente novamente.";
  } finally {
    botao.disabled = false;
    botao.textContent = "Enviar cadastro";
  }
});

