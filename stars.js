if (!document.getElementById("star-container")) {
    const starContainer = document.createElement("div");
    starContainer.id = "star-container";
    document.body.appendChild(starContainer);
}
const starContainer = document.getElementById("star-container");
const starContainerWidth = starContainer.getBoundingClientRect().width;
const starContainerHeight = starContainer.getBoundingClientRect().height;

for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const x = Math.floor(Math.random() * starContainerWidth);
    const y = Math.floor(Math.random() * starContainerHeight);
    const size = Math.floor(Math.random() * 4) + 1;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    starContainer.appendChild(star);
}