// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const paragraph = document.querySelector('#boton');

    button.addEventListener('click', () => {
        // Generar un color de fondo aleatorio en formato hexadecimal
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        paragraph.style.backgroundColor = randomColor;
    });
});
