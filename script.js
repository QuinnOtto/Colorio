document.getElementById("numColors").defaultValue = 3;

function randomColor() {
    const numColors = document.getElementById("numColors").value;
    const container = document.getElementById("container");
    const spaceBetween = document.getElementById("space_between").checked;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < numColors; i++) {
        const number = Math.floor(Math.random() * 16777215).toString(16);

        let div = document.createElement("div");
        div.className = "colors";
        div.style.backgroundColor = "#" + number;
        div.style.width = "100px";
        div.style.height = "80vh";
        if (spaceBetween) {
            div.style.border = "4px solid #555";
        } else {
            div.style.border = "none";
        }
        container.appendChild(div);
    }
}

function customAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerHTML = message;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.onclick = function() {
        document.body.removeChild(alertBox);
        adjustAlertPositions();
    };

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);

    adjustAlertPositions();
}

function adjustAlertPositions() {
    const alerts = document.querySelectorAll(".alert-box");
    alerts.forEach((alert, index) => {
        alert.style.bottom = `${20 + (index * 80)}px`;
    });
}

document.addEventListener("keydown", function(event) {
    const numColors = document.getElementById("numColors").value;

    if (numColors > 20) {
        customAlert("You can't enter a number greater than 20");
    } else if (numColors <= 0) {
        customAlert("You can't enter a number smaller than 0");
    } else if (event.code === "Space") {
        randomColor();
    }
});

const spaceBetween = document.getElementById("space_between");

spaceBetween.addEventListener("change", function() {
    const colors = document.querySelectorAll(".colors");
    colors.forEach(color => {
        if (spaceBetween.checked) {
            color.style.border = "4px solid #555";
        } else {
            color.style.border = "none";
        }
    });
});


randomColor();