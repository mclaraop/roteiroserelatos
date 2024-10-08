document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar mais ações, como enviar para um servidor.
    }
});