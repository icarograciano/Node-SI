// Código JavaScript para validação de CPF no arquivo cpf.js
document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpfInput').value;
    const message = document.getElementById('cpfMessage');

    if (isValidCPF(cpf)) {
        message.style.color = 'green';
        message.textContent = 'CPF válido';
    } else {
        message.style.color = 'red';
        message.textContent = 'CPF inválido';
    }
});

function isValidCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // Verifica se o CPF tem 11 dígitos ou se é uma sequência repetida
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstVerifierDigit = 11 - (sum % 11);
    if (firstVerifierDigit === 10 || firstVerifierDigit === 11) {
        firstVerifierDigit = 0;
    }
    if (firstVerifierDigit !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondVerifierDigit = 11 - (sum % 11);
    if (secondVerifierDigit === 10 || secondVerifierDigit === 11) {
        secondVerifierDigit = 0;
    }
    if (secondVerifierDigit !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

