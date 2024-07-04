const container = document.querySelector(".container");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = "";

    // Set grid template
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create new grid
    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("new-div");

        // Set initial random color
        const initialColor = getRandomColor();
        newDiv.style.backgroundColor = initialColor;

        // Add hover effect
        let darkerColor = initialColor;
        newDiv.addEventListener("mouseenter", () => {
            if (darkerColor === initialColor) {
                // First hover: darken the color
                darkerColor = initialColor.replace("rgb", "rgba").replace(")", ", 0.8)");
                newDiv.style.backgroundColor = darkerColor;
            } else {
                // Subsequent hovers: darken further
                darkerColor = darkerColor.replace("0.8)", "0.6)");
                newDiv.style.backgroundColor = darkerColor;
            }
        });

        container.appendChild(newDiv);
    }
}

// Initial grid creation (you can set any default size here)
createGrid(4);

function updateGrid() {
    let newSize = prompt("Enter new grid size (e.g., 16 for a 16x16 grid):");
    newSize = parseInt(newSize);
    if (newSize > 0) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number.");
    }
}

// updateGrid() when a button is clicked or any other event
document.querySelector("#updateButton").addEventListener("click", updateGrid);