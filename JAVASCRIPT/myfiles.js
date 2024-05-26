document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-select');
    const typeFilter = document.getElementById('type-filter');
    const fileItems = document.querySelectorAll('.file-item');

    sortSelect.addEventListener('change', function() {
        const sortBy = sortSelect.value;
        sortFiles(sortBy);
    });

    typeFilter.addEventListener('change', function() {
        const filterBy = typeFilter.value;
        filterFiles(filterBy);
    });

    function sortFiles(sortBy) {
        const fileList = document.querySelector('.file-list');
        const sortedItems = Array.from(fileItems).sort((a, b) => {
            const aValue = a.querySelector('.file-name').textContent.toLowerCase();
            const bValue = b.querySelector('.file-name').textContent.toLowerCase();
            if (sortBy === 'name-asc') {
                return aValue.localeCompare(bValue);
            } else if (sortBy === 'name-desc') {
                return bValue.localeCompare(aValue);
            } else if (sortBy === 'date-asc') {
                return new Date(aValue) - new Date(bValue);
            } else if (sortBy === 'date-desc') {
                return new Date(bValue) - new Date(aValue);
            }
        });
        fileList.innerHTML = '';
        sortedItems.forEach(item => {
            fileList.appendChild(item);
        });
    }

    function filterFiles(filterBy) {
        fileItems.forEach(item => {
            const itemType = item.querySelector('.file-details').textContent.toLowerCase();
            if (filterBy === '' || itemType.includes(filterBy)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
