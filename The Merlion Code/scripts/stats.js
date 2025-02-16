var loader = document.getElementById("loading-wrapper");
window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = 'none';
        }, 4500);
    }, 4500)
}