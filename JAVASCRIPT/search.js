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


function toggleButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.toggle('active');
    filterListings();
}

function sortListings() {
    const select = document.getElementById('price-select');
    const listings = Array.from(document.querySelectorAll('.listing-item'));
    const container = document.querySelector('.listing-items');
    const selectedValue = select.value;

    listings.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').textContent.replace('$', ''));
        const priceB = parseInt(b.querySelector('.price').textContent.replace('$', ''));
        if (selectedValue === 'low-high') {
            return priceA - priceB;
        } else if (selectedValue === 'high-low') {
            return priceB - priceA;
        } else {
            return 0;
        }
    });

    listings.forEach(listing => container.appendChild(listing));
}

function filterListings() {
    const openNowBtn = document.getElementById('open-now-btn').classList.contains('active');
    const nearMeBtn = document.getElementById('near-me-btn').classList.contains('active');

    const listings = document.querySelectorAll('.listing-item');
    listings.forEach(listing => {
        const isOpen = listing.querySelector('.status').textContent === 'Open';

        if ((openNowBtn && !isOpen) || (nearMeBtn && !isNearMe(listing))) {
            listing.style.display = 'none';
        } else {
            listing.style.display = '';
        }
    });
}

function isNearMe(listing) {
    // Implement your logic to determine if the listing is near the user
    // This is a placeholder function
    return true;
}

function search() {
    const whatSearch = document.getElementById('what-search').value.toLowerCase();
    const whereSearch = document.getElementById('where-search').value.toLowerCase();

    const listings = document.querySelectorAll('.listing-item');
    listings.forEach(listing => {
        const listingContent = listing.querySelector('.listing-content').textContent.toLowerCase();
        if (listingContent.includes(whatSearch) && listingContent.includes(whereSearch)) {
            listing.style.display = '';
        } else {
            listing.style.display = 'none';
        }
    });
}
