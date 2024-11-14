document.getElementById("numColors").defaultValue = 3;

function randomColor() {
    const numColors = document.getElementById("numColors").value;
    const container = document.getElementById("container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < numColors; i++) {
        const number = Math.floor(Math.random() * 16777215).toString(16);

        let div = document.createElement("div");
        div.setAttribute("id", "colors");
        div.style.backgroundColor = "#" + number;
        div.style.width = "100px";
        div.style.height = "80vh";
        container.appendChild(div);
    }
}

document.addEventListener("keydown", function(event) {
    const numColors = document.getElementById("numColors").value;

    if (numColors > 20) {
        alert("You cant enter a number bigger than 20");
    } else if (numColors <= 0) {
        alert("You cant enter a number smaller than 0");
    } else if (event.code === "Space") {
        randomColor();
    }
});

randomColor();