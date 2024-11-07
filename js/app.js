document.getElementById("toggle-bw-mode").addEventListener("click", function() {
    document.body.classList.toggle("bw-mode");

    // Cambiar el texto del botón según el estado
    if (document.body.classList.contains("bw-mode")) {
        this.textContent = "Color";
    } else {
        this.textContent = "Blanco y Negro";
    }
});
