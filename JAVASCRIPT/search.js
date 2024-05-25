document.addEventListener("DOMContentLoaded", function() {
    const listingItems = document.querySelectorAll(".listing-item");

    listingItems.forEach(item => {
        const statusDiv = item.querySelector(".status");
        const isOpen = Math.random() > 0.5;
        const statusText = isOpen ? "Open" : "Closed";
        const statusClass = isOpen ? "open" : "closed";

        const randomLocation = `Location ${Math.floor(Math.random() * 100) + 1}`;

        statusDiv.textContent = `${statusText}`;
        statusDiv.classList.add(statusClass);
    });
});


function toggleButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.toggle('toggle-on');
    button.classList.toggle('toggle-off');
}

function search() {
    // Your search function implementation
    console.log('Search button clicked');
}
