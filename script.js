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
        const colorName = getColorName(`#${number}`);

        let div = document.createElement("div");
        let divText = document.createElement("p");
        div.className = "colors";
        div.style.backgroundColor = "#" + number;
        div.style.width = "100px";
        div.style.height = "5 0vh";
        divText.innerHTML = "#" + number + "<br>" + colorName;
        if (spaceBetween) {
            div.style.border = "4px solid #555";
        } else {
            div.style.border = "none";
        }
        container.appendChild(div);
        div.appendChild(divText);
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

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return { r, g, b };
}

function colorDistance(rgb1, rgb2) {
    const dr = rgb1.r - rgb2.r;
    const dg = rgb1.g - rgb2.g;
    const db = rgb1.b - rgb2.b;
    
    return Math.sqrt(dr * dr + dg * dg + db * db);
}

function getColorName(hex) {
    const colors = {
        "#f0f8ff": "Alice Blue",
        "#faebd7": "Antique White",
        "#00ffff": "Aqua",
        "#7fffd4": "Aquamarine",
        "#f0ffff": "Azure",
        "#f5f5dc": "Beige",
        "#ffe4c4": "Bisque",
        "#000000": "Black",
        "#ffebcd": "Blanched Almond",
        "#0000ff": "Blue",
        "#8a2be2": "Blue Violet",
        "#a52a2a": "Brown",
        "#deb887": "Burly Wood",
        "#5f9ea0": "Cadet Blue",
        "#7fff00": "Chartreuse",
        "#d2691e": "Chocolate",
        "#ff7f50": "Coral",
        "#6495ed": "Cornflower Blue",
        "#fff8dc": "Cornsilk",
        "#dc143c": "Crimson",
        "#00ffff": "Cyan",
        "#00008b": "Dark Blue",
        "#008b8b": "Dark Cyan",
        "#b8860b": "Dark Golden Rod",
        "#a9a9a9": "Dark Gray",
        "#006400": "Dark Green",
        "#a9a9a9": "Dark Grey",
        "#bdb76b": "Dark Khaki",
        "#8b008b": "Dark Magenta",
        "#556b2f": "Dark Olive Green",
        "#ff8c00": "Dark Orange",
        "#9932cc": "Dark Orchid",
        "#8b0000": "Dark Red",
        "#e9967a": "Dark Salmon",
        "#8fbc8f": "Dark Sea Green",
        "#483d8b": "Dark Slate Blue",
        "#2f4f4f": "Dark Slate Gray",
        "#2f4f4f": "Dark Slate Grey",
        "#00ced1": "Dark Turquoise",
        "#9400d3": "Dark Violet",
        "#ff1493": "Deep Pink",
        "#00bfff": "Deep Sky Blue",
        "#696969": "Dim Gray",
        "#696969": "Dim Grey",
        "#1e90ff": "Dodger Blue",
        "#b22222": "Fire Brick",
        "#fffaf0": "Floral White",
        "#228b22": "Forest Green",
        "#ff00ff": "Fuchsia",
        "#dcdcdc": "Gainsboro",
        "#f8f8ff": "Ghost White",
        "#ffd700": "Gold",
        "#daa520": "Golden Rod",
        "#808080": "Gray",
        "#008000": "Green",
        "#adff2f": "Green Yellow",
        "#808080": "Grey",
        "#f0fff0": "Honey Dew",
        "#ff69b4": "Hot Pink",
        "#cd5c5c": "Indian Red",
        "#4b0082": "Indigo",
        "#fffff0": "Ivory",
        "#f0e68c": "Khaki",
        "#e6e6fa": "Lavender",
        "#fff0f5": "Lavender Blush",
        "#7cfc00": "Lawn Green",
        "#fffacd": "Lemon Chiffon",
        "#add8e6": "Light Blue",
        "#f08080": "Light Coral",
        "#e0ffff": "Light Cyan",
        "#fafad2": "Light Golden Rod Yellow",
        "#d3d3d3": "Light Gray",
        "#90ee90": "Light Green",
        "#d3d3d3": "Light Grey",
        "#ffb6c1": "Light Pink",
        "#ffa07a": "Light Salmon",
        "#20b2aa": "Light Sea Green",
        "#87cefa": "Light Sky Blue",
        "#778899": "Light Slate Gray",
        "#778899": "Light Slate Grey",
        "#b0c4de": "Light Steel Blue",
        "#ffffe0": "Light Yellow",
        "#00ff00": "Lime",
        "#32cd32": "Lime Green",
        "#faf0e6": "Linen",
        "#ff00ff": "Magenta",
        "#800000": "Maroon",
        "#66cdaa": "Medium Aqua Marine",
        "#0000cd": "Medium Blue",
        "#ba55d3": "Medium Orchid",
        "#9370db": "Medium Purple",
        "#3cb371": "Medium Sea Green",
        "#7b68ee": "Medium Slate Blue",
        "#00fa9a": "Medium Spring Green",
        "#48d1cc": "Medium Turquoise",
        "#c71585": "Medium Violet Red",
        "#191970": "Midnight Blue",
        "#f5fffa": "Mint Cream",
        "#ffe4e1": "Misty Rose",
        "#ffe4b5": "Moccasin",
        "#ffdead": "Navajo White",
        "#000080": "Navy",
        "#fdf5e6": "Old Lace",
        "#808000": "Olive",
        "#6b8e23": "Olive Drab",
        "#ffa500": "Orange",
        "#ff4500": "Orange Red",
        "#da70d6": "Orchid",
        "#eee8aa": "Pale Golden Rod",
        "#98fb98": "Pale Green",
        "#afeeee": "Pale Turquoise",
        "#db7093": "Pale Violet Red",
        "#ffefd5": "Papaya Whip",
        "#ffdab9": "Peach Puff",
        "#cd853f": "Peru",
        "#ffc0cb": "Pink",
        "#dda0dd": "Plum",
        "#b0e0e6": "Powder Blue",
        "#800080": "Purple",
        "#ff0000": "Red",
        "#bc8f8f": "Rosy Brown",
        "#4169e1": "Royal Blue",
        "#8b4513": "Saddle Brown",
        "#fa8072": "Salmon",
        "#f4a460": "Sandy Brown",
        "#2e8b57": "Sea Green",
        "#fff5ee": "Sea Shell",
        "#a0522d": "Sienna",
        "#c0c0c0": "Silver",
        "#87ceeb": "Sky Blue",
        "#6a5acd": "Slate Blue",
        "#708090": "Slate Gray",
        "#708090": "Slate Grey",
        "#fffafa": "Snow",
        "#00ff7f": "Spring Green",
        "#4682b4": "Steel Blue",
        "#d2b48c": "Tan",
        "#008080": "Teal",
        "#d8bfd8": "Thistle",
        "#ff6347": "Tomato",
        "#40e0d0": "Turquoise",
        "#ee82ee": "Violet",
        "#f5deb3": "Wheat",
        "#ffffff": "White",
        "#f5f5f5": "White Smoke",
        "#ffff00": "Yellow",
        "#9acd32": "Yellow Green"
    };

    const inputRgb = hexToRgb(hex);

    if (colors[hex.toLowerCase()]) {
        return colors[hex.toLowerCase()];
    }

    let closestColor = null;
    let closestDistance = Infinity;

    for (const [colorHex, colorName] of Object.entries(colors)) {
        const colorRgb = hexToRgb(colorHex);
        const distance = colorDistance(inputRgb, colorRgb);

        if (distance < closestDistance) {
            closestColor = colorName;
            closestDistance = distance;
        }
    }

    return closestColor || "Unknown Color";
}

function adjustAlertPositions() {
    const alerts = document.querySelectorAll(".alert-box");
    alerts.forEach((alert, index) => {
        alert.style.bottom = `${20 + (index * 80)}px`;
    });
}

document.addEventListener("keydown", function(event) {
    const numColors = document.getElementById("numColors").value;

    if (numColors > 15) {
        customAlert("You can't enter a number greater than 15");
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
