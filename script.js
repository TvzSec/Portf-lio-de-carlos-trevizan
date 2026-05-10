// =========================
// FORMULÁRIO
// =========================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // CAMPOS
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // VALIDAÇÃO
    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos.");

        return;
    }

    // VALIDAR EMAIL
    const validarEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!validarEmail.test(email)){

        alert("Digite um e-mail válido.");

        return;
    }

    // SUCESSO
    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Obrigado pelo contato, " + nome + "."
    );

    // LIMPA CAMPOS
    form.reset();

});


// =========================
// TEMA ESCURO/CLARO
// =========================

const themeBtn =
    document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});