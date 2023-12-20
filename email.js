const form = document.querySelector(".wrapepr"),
    button = form.querySelector(".heading button "),
    overlay = document.querySelector(".overlay");



button.addEventListener('click',() => {
    form.style.display = 'none';
    overlay.style.display = 'none';
});
