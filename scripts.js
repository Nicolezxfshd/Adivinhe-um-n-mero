let randomNumber;
let attempts = 10;

function sortearNumero() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Inicializa o número ao carregar a página
sortearNumero();

document.getElementById('submitGuess').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attemptsDisplay');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    attempts--;
    attemptsDisplay.textContent = `Tentativas restantes: ${attempts}`;

    if (guess === randomNumber) {
        result.textContent = 'Parabéns! Você acertou o número!';
    } else if (attempts === 0) {
        result.textContent = `Você perdeu! O número era ${randomNumber}.`;
    } else if (guess < randomNumber) {
        result.textContent = `O número é maior. Você ainda tem ${attempts} tentativas.`;
    } else {
        result.textContent = `O número é menor. Você ainda tem ${attempts} tentativas.`;
    }
});

document.getElementById('sortearBtn').addEventListener('click', function() {
    sortearNumero();
    attempts = 10;
    document.getElementById('attemptsDisplay').textContent = 'Tentativas restantes: 10';
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
});