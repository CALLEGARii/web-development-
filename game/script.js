// Seleciona todos os elementos com a classe 'quadrado'
const quadrados = document.querySelectorAll('.quadrado');
let quadradoSelecionado = null;

// Adiciona eventos de clique para selecionar ou desselecionar os quadrados
quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', () => {
        if (quadrado.classList.contains('selecionado')) {
            quadrado.classList.remove('selecionado');
            quadradoSelecionado = null;
        } else if (quadradoSelecionado) {
            alert('ATENÇÃO! Já há um quadrado selecionado. Desselecione-o antes de selecionar outro.');
        } else {
            quadrado.classList.add('selecionado');
            quadradoSelecionado = quadrado;
        }
    });
});

// Adiciona eventos de teclado para mover o quadrado selecionado
document.addEventListener('keydown', (evento) => {
    if (!quadradoSelecionado) return;

    // Obtém as posições atuais do quadrado
    let left = parseInt(window.getComputedStyle(quadradoSelecionado).left) || 0;
    let top = parseInt(window.getComputedStyle(quadradoSelecionado).top) || 0;

    // Atualiza as posições com base na tecla pressionada
    switch (evento.key) {
        case 'w': // Move para cima
        case 'ArrowUp':
            top -= 10;
            break;
        case 'a': // Move para a esquerda
        case 'ArrowLeft':
            left -= 10;
            break;
        case 's': // Move para baixo
        case 'ArrowDown':
            top += 10;
            break;
        case 'd': // Move para a direita
        case 'ArrowRight':
            left += 10;
            break;
    }

    // Define as novas posições
    quadradoSelecionado.style.left = `${left}px`;
    quadradoSelecionado.style.top = `${top}px`;
});
