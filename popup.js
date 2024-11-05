// document.getElementById('save').addEventListener('click', () => {
//     const link = document.getElementById('link').value;
//     if (link) {
//         chrome.storage.sync.get('links', (data) => {
//             const links = data.links || [];
//             links.push(link);
//             chrome.storage.sync.set({ links: links }, () => {
//                 document.getElementById('link').value = '';
//                 displayLinks();
//             });
//         });
//     }
// });

// function displayLinks() {
//     chrome.storage.sync.get('links', (data) => {
//         const linkList = document.getElementById('linkList');
//         linkList.innerHTML = '';
//         const links = data.links || [];
//         links.forEach(link => {
//             const li = document.createElement('li');
//             li.textContent = link;
//             linkList.appendChild(li);
//         });
//     });
// }

// // Display links when the popup opens
// displayLinks();













// document.getElementById('save').addEventListener('click', () => {
//     const link = document.getElementById('link').value;
//     if (link) {
//         chrome.storage.sync.get('links', (data) => {
//             const links = data.links || [];
//             links.push(link);
//             chrome.storage.sync.set({ links: links }, () => {
//                 document.getElementById('link').value = '';
//                 displayLinks(); // Refresh the list of saved links
//             });
//         });
//     }
// });

// function displayLinks() {
//     chrome.storage.sync.get('links', (data) => {
//         const linkList = document.getElementById('linkList');
//         linkList.innerHTML = ''; // Clear the list before adding new items
//         const links = data.links || [];
        
//         links.forEach(link => {
//             const li = document.createElement('li');
            
//             // Create an anchor tag (<a>) for the link
//             const linkElement = document.createElement('a');
//             linkElement.href = link;  // Set the href attribute to the saved link
//             linkElement.textContent = link;  // Set the text content to the link URL
//             linkElement.target = "_blank";  // Open the link in a new tab
            
//             // Append the anchor element to the list item
//             li.appendChild(linkElement);
            
//             // Append the list item to the unordered list
//             linkList.appendChild(li);
//         });
//     });
// }

// // Display links when the popup opens
// displayLinks();












// document.querySelector('.save-btn').addEventListener('click', () => {
//     const linkInput = document.querySelector('.link-input');
//     const link = linkInput.value.trim();
    
//     if (link) {
//         chrome.storage.sync.get('links', (data) => {
//             const links = data.links || [];
//             links.push(link);
//             chrome.storage.sync.set({ links: links }, () => {
//                 linkInput.value = '';  // Clear the input field
//                 displayLinks(); // Refresh the list of saved links
//             });
//         });
//     }
// });

// const displayLinks = () => {
//     chrome.storage.sync.get('links', (data) => {
//         const linkList = document.querySelector('.link-list');
//         linkList.innerHTML = ''; // Clear the list before adding new items
//         const links = data.links || [];
        
//         links.forEach(link => {
//             const li = document.createElement('li');
            
//             // Create an anchor tag (<a>) for the link
//             const linkElement = document.createElement('a');
//             linkElement.href = link;  // Set the href attribute to the saved link
//             linkElement.textContent = link;  // Set the text content to the link URL
//             linkElement.target = "_blank";  // Open the link in a new tab
            
//             // Append the anchor element to the list item
//             li.appendChild(linkElement);
            
//             // Append the list item to the unordered list
//             linkList.appendChild(li);
//         });
//     });
// }

// // Display links when the popup opens
// displayLinks();




















document.querySelector('.save-btn').addEventListener('click', () => {
    const linkInput = document.querySelector('.link-input');
    const link = linkInput.value.trim();
    
    if (link) {
        chrome.storage.sync.get('links', (data) => {
            const links = data.links || [];
            links.unshift(link);  // Add the new link to the top of the array
            chrome.storage.sync.set({ links: links }, () => {
                linkInput.value = '';  // Clear the input field
                displayLinks(); // Refresh the list of saved links
            });
        });
    }
});

const displayLinks = () => {
    chrome.storage.sync.get('links', (data) => {
        const linkList = document.querySelector('.link-list');
        linkList.innerHTML = ''; // Clear the list before adding new items
        const links = data.links || [];
        
        links.forEach(link => {
            const li = document.createElement('li');
            
            // Create an anchor tag (<a>) for the link
            const linkElement = document.createElement('a');
            linkElement.href = link;  // Set the href attribute to the saved link
            linkElement.textContent = link;  // Set the text content to the link URL
            linkElement.target = "_blank";  // Open the link in a new tab
            
            // Append the anchor element to the list item
            li.appendChild(linkElement);
            
            // Append the list item to the unordered list
            linkList.appendChild(li);
        });
    });
}

// Display links when the popup opens
displayLinks();
















