    document.addEventListener('DOMContentLoaded', function() {
        var counter = 1;
        document.querySelector('#adicionar').addEventListener('click', function(event) {
        event.preventDefault();

        const p = document.createElement('p');
        p.textContent = `${counter} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
        document.querySelector('#text').appendChild(p);
        counter++;
        });

        document.querySelector('#clear').addEventListener('click', function(event) {
        event.preventDefault();
        const paragraphs = document.querySelector(`p`);
            paragraphs.remove();
        });

        document.querySelector('#clearUltimo').addEventListener('click', function(event) {
            event.preventDefault();
            const paragraphs = document.querySelectorAll('#text > *');
            if(paragraphs.length > 0){
                const ultimoElemento = paragraphs[paragraphs.length - 1];     
                ultimoElemento.parentNode.removeChild(ultimoElemento);
            }
                
            });

            document.querySelector('#clearTodos').addEventListener('click', function(event) {
                event.preventDefault();
                const paragraphs = document.querySelectorAll(`p`);
                paragraphs.forEach(paragraphs => paragraphs.remove());    
                });
    });