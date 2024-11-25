// Variável para armazenar a cor selecionada
let selectedColor = '';

// Seleciona todos os botões coloridos
const colorButtons = document.querySelectorAll('.color-button');

// Seleciona o elemento do texto "Preview"
const previewText = document.querySelector('.preview-text');

// Adiciona evento de "mouseover" a cada botão
colorButtons.forEach(button => {

    // Quando o mouse passar sobre o botão, muda a cor de fundo
    button.addEventListener('mouseover', () => {
        if (!selectedColor) {
            document.body.style.backgroundColor = button.dataset.color;
            previewText.style.display = 'block';
        } else {
            document.body.style.backgroundColor = selectedColor;
            previewText.style.display = 'block'; // Exibe o "Preview"
        }

        // Altera as propriedades do texto
        previewText.style.color = 'black'; // Cor do texto sempre preto
        previewText.style.fontFamily = 'sans-serif'; // Fonte sem serifa
    });

    // Quando o mouse sair do botão, volta à cor selecionada (se houver)
    button.addEventListener('mouseout', () => {
        if (selectedColor) {
            document.body.style.backgroundColor = selectedColor;
            previewText.style.display = 'none'; // Remove o "Preview"
        } else {
            document.body.style.backgroundColor = '';
            previewText.style.display = 'none'; // Remove o "Preview"
        }
        
    });

    // Quando um botão é clicado, fixa a cor
    button.addEventListener('click', () => {
        selectedColor = button.dataset.color; // Atualiza a cor selecionada
        document.body.style.backgroundColor = selectedColor; // Muda o fundo para a cor clicada
        previewText.style.display = 'none'; // Remove o "Preview"
        
        
    });
});

// Evento para resetar o fundo e ocultar o texto
document.querySelector('.clean').addEventListener('click', () => {
    document.body.style.backgroundColor = ''; // Volta ao fundo padrão
    selectedColor = ''; // Reseta a cor selecionada
    previewText.style.display = 'none'; // Oculta o texto "Preview"
});
