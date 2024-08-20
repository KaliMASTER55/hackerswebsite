function performSearch() {
    // Remove previous highlights
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
    });

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (!searchTerm) {
        return;
    }

    const elements = document.body.querySelectorAll('*');
    elements.forEach(element => {
        if (element.children.length === 0) { // Only consider leaf nodes
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                element.classList.add('highlight');
            }
        }
    });
}