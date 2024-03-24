// script.js
// Add JavaScript for dynamic form handling and preview functionality
// Initialize variables to store user inputs
let personalInfo = {};
let education = [];
let workExperience = [];
let skills = [];

// Function to update preview
function updatePreview() {
    // Generate preview HTML dynamically based on user inputs
    let previewHTML = `
        <h3>Personal Information</h3>
        <p>Name: ${personalInfo.name}</p>
        <p>Email: ${personalInfo.email}</p>
        <!-- Add more personal information fields as needed -->

        <h3>Education</h3>
    `;
    // Add education details to preview
    education.forEach(edu => {
        previewHTML += `<p>${edu.degree}, ${edu.institution}, ${edu.year}</p>`;
    });

    // Add work experience details to preview
    previewHTML += `<h3>Work Experience</h3>`;
    workExperience.forEach(exp => {
        previewHTML += `<p>${exp.position}, ${exp.company}, ${exp.duration}</p>`;
    });

    // Add skills details to preview
    previewHTML += `<h3>Skills</h3>`;
    previewHTML += `<p>${skills.join(", ")}</p>`;

    // Update preview section with generated HTML
    document.getElementById('preview').innerHTML = previewHTML;
}

// Function to handle form submission
document.getElementById('resumeBuilderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Get values from form fields and update variables
    personalInfo.name = document.getElementById('name').value;
    personalInfo.email = document.getElementById('email').value;
    // Update education, work experience, and skills arrays similarly
    // Call updatePreview() function to update the preview
});

// Function to handle download button click
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Generate PDF from the preview content and initiate download
    // Use a library like jsPDF to generate PDF
});

// Add more JavaScript for form handling and other functionalities as needed
