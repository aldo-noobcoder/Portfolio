const main = document.getElementById("main-wrap");
const gradient = document.getElementById("gradient");

function HandleMouseMove(e){
    gradient.style.display = "block";
    gradient.style.left = `${e.clientX}px`;
    gradient.style.top = `${e.clientY}px`;
}

main.onmouseenter = () =>
{
    window.addEventListener("mousemove", HandleMouseMove);
}

main.onmouseleave = () => {
    gradient.style.display = "none";
    window.addEventListener("mousemove", HandleMouseMove);
}

