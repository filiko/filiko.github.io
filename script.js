// document.addEventListener('DOMContentLoaded', function() {
//     // Load default content (e.g., the 'bio' section) when the page first loads
//     loadContent('bio');

//     // Event listener for sidebar navigation
//     const links = document.querySelectorAll('.sidebar a');
//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // prevent default navigation
//             const section = this.getAttribute('href'); // get the section name from the href attribute
//             loadContent(section);
//         });
//     });
// });

// function loadContent(section) {
//     const contentDiv = document.getElementById('main-content');
    
//     switch(section) {
//         case 'bio':
//             contentDiv.innerHTML = '<h1>About Me</h1><p>This is the bio section...</p>';
//             break;
//         case 'experience':
//             contentDiv.innerHTML = '<h1>Professional Experience</h1><p>This is the experience section...</p>';
//             break;
//         // ... Add cases for other sections ...
//         default:
//             contentDiv.innerHTML = '<h1>404</h1><p>Page not found!</p>';
//     }
// }
