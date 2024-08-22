let contentCount = 1;

function addContent() {
    // Get the values from input fields
    const title = document.getElementById('contentTitle').value;
    const body = document.getElementById('contentBody').value;

    if (title && body) {
        contentCount++;
        const contentList = document.getElementById('content-list');

        // Create a new content item dynamically
        const newItem = document.createElement('div');
        newItem.classList.add('content-item');
        newItem.setAttribute('id', `content-${contentCount}`);

        // Add the content title, body, and action buttons (edit/delete)
        newItem.innerHTML = `
            <h3>${title}</h3>
            <p>${body}</p>
            <button onclick="editContent('content-${contentCount}')">Edit</button>
            <button onclick="deleteContent('content-${contentCount}')">Delete</button>
        `;

        // Append the new item to the content list
        contentList.appendChild(newItem);

        // Clear the input fields
        document.getElementById('contentTitle').value = '';
        document.getElementById('contentBody').value = '';
    } else {
        alert('Please fill in both the title and body.');
    }
}

function editContent(contentId) {
    // Get the content element
    const contentItem = document.getElementById(contentId);

    // Get the title and body values
    const currentTitle = contentItem.querySelector('h3').textContent;
    const currentBody = contentItem.querySelector('p').textContent;

    // Populate the admin controls with current content for editing
    document.getElementById('contentTitle').value = currentTitle;
    document.getElementById('contentBody').value = currentBody;

    // Change the Add button to an Update button
    document.querySelector('#admin-controls button').textContent = 'Update Content';
    
    // Attach an update event handler
    document.querySelector('#admin-controls button').onclick = function() {
        updateContent(contentId);
    };
}

function updateContent(contentId) {
    const title = document.getElementById('contentTitle').value;
    const body = document.getElementById('contentBody').value;

    // Update the content
    const contentItem = document.getElementById(contentId);
    contentItem.querySelector('h3').textContent = title;
    contentItem.querySelector('p').textContent = body;

    // Reset the form
    document.getElementById('contentTitle').value = '';
    document.getElementById('contentBody').value = '';

    // Revert the Update button to Add button
    document.querySelector('#admin-controls button').textContent = 'Add Content';
    document.querySelector('#admin-controls button').onclick = addContent;
}

function deleteContent(contentId) {
    // Remove the content item from the DOM
    const contentItem = document.getElementById(contentId);
    contentItem.remove();
}
